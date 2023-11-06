import './style.css'
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import L from 'leaflet'

// Define the initial map coordinates and zoom level
const initialLat = 51.505
const initialLng = -0.09
const initialZoom = 13

// Define the map and add the tile layer
const map = L.map('map-container').setView([initialLat, initialLng], initialZoom)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map)

// Re-define the default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
})

// Define and add the marker
const marker = L.marker([initialLat, initialLng]).bindPopup('A simple <b>popup</b>.').addTo(map)

// Define and add the circle
const initialRadius = 1000
const circle = L.circle([initialLat, initialLng], {
  color: 'teal',
  fillOpacity: 0.15,
  radius: initialRadius
}).addTo(map)

// Define the scale control
L.control.scale().addTo(map)

// Define the event handlers
const onRangeChange = ({ target }) => {
  let radius = target.value
  document.getElementById('ran_value').value = radius

  const unit = getUnit()
  switch (unit) {
    case 'km':
      radius = radius * 1000
      break
    case 'mi':
      radius = radius * 1609.34
      break
  }
  circle.setRadius(radius)
}

const onRangeInputChange = ({ target }) => {
  let radius = target.value
  document.getElementById('ran').value = radius

  const unit = getUnit()
  switch (unit) {
    case 'km':
      radius *= 1000
      break
    case 'mi':
      radius *= 1609.34
      break
  }
  circle.setRadius(radius)
}

const onLocalButtonClick = () => {
  try {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setLat(latitude)
      setLng(longitude)
    })
  } catch {
    console.info('Geolocation is not supported by this browser.')
  }
}

const onGoButtonClick = () => {
  try {
    setViewMarker(getLat(), getLng())
    toggleCircleLatLang()
  } catch (error) {
    console.info(error)
    emptyInputs()
  }
}

const onDefButtonClick = () => {
  try {
    setViewMarker(initialLat, initialLng)
    toggleCircleLatLang(initialLat, initialLng)
    setLat(initialLat)
    setLng(initialLng)
  } catch (error) {
    console.info(error)
    emptyInputs()
  }
}

const onUnitChange = ({ target }) => {
  const unit = target.value

  let radius = document.getElementById('ran').value
  switch (unit) {
    case 'km':
      radius *= 1000
      break
    case 'mi':
      radius *= 1609.34
      break
  }
  circle.setRadius(radius)
}

// Define the utility functions
const emptyInputs = () => {
  document.getElementById('lat').value = ''
  document.getElementById('lng').value = ''
  document.getElementById('ran').value = initialRadius
  document.getElementById('ran_value').value = initialRadius
  document.getElementById('ran_unit').value = 'm'
}

const getLat = () => {
  const lat = parseFloat(document.getElementById('lat').value)
  return isNaN(lat) ? initialLat : lat
}

const setLat = (lat = initialLat) => {
  document.getElementById('lat').value = isNaN(lat) ? initialLat : lat
}

const getLng = () => {
  const lng = parseFloat(document.getElementById('lng').value)
  return isNaN(lng) ? initialLng : lng
}

const setLng = (lng = initialLng) => {
  document.getElementById('lng').value = isNaN(lng) ? initialLng : lng
}

const getUnit = () => {
  return document.getElementById('ran_unit').value ?? 'm' //m, km, mi
}

const toggleCircleLatLang = (latitude = getLat(), longitude = getLng()) => {
  circle.setLatLng([latitude, longitude])
}

const setViewMarker = (latitude, longitude) => {
  map.setView([latitude, longitude])
  marker.setLatLng([latitude, longitude])
}

// Attach the event listeners
document.getElementById('ran').addEventListener('input', onRangeChange)
document.getElementById('ran_unit').addEventListener('change', onUnitChange)
document.getElementById('ran_value').addEventListener('input', onRangeInputChange)
document.getElementById('btn-local').addEventListener('click', onLocalButtonClick)
document.getElementById('btn-go').addEventListener('click', onGoButtonClick)
document.getElementById('btn-def').addEventListener('click', onDefButtonClick)
