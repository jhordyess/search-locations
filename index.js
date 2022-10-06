const lat = 51.505;
const lng = -0.09;
const zoom = 13;
// Define the map
let theMap = L.map("map-container").setView([lat, lng], zoom);
// Define and add the marker
let marker = L.marker([lat, lng])
  .bindPopup("A simple <b>popup</b>.")
  .addTo(theMap);
// Show scale buttons
L.control.scale().addTo(theMap);
// Add tile for OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(theMap);
//Draw the circle
const circle = L.circle([lat, lng], {
  color: "teal",
  fillOpacity: 0.15,
  radius: Number(document.getElementById("ran_value").value), //* In meters
}).addTo(theMap);
// Go button
const go = () => {
  try {
    set_view_marker(get_lat(), get_lng());
    toggle_circle_latlang();
  } catch (error) {
    console.log(error);
    empty_inputs();
    alert("Some error");
  }
};
// Default button
const def = () => {
  try {
    set_view_marker(lat, lng);
  } catch (error) {
    console.log(error);
    alert("Some error");
  } finally {
    empty_inputs();
  }
};

const onRange = ({ target }) => {
  let val = target.value;
  document.getElementById("ran_value").value = val;
  toggle_circle_radius(val);
};

const onRangeInput = ({ target }) => {
  let val = target.value;
  document.getElementById("ran").value = val;
  toggle_circle_radius(val);
};
//***REMOVED*** ***REMOVED***
const empty_inputs = () => {
  document.getElementById("lat").value = "";
  document.getElementById("lng").value = "";
  document.getElementById("ran").value = 1;
  document.getElementById("ran_value").value = 1;
};

const get_lat = () => {
  let x = parseFloat(document.getElementById("lat").value);
  return isNaN(x) ? lat : x;
};

const set_lat = (x = lat) => {
  document.getElementById("lat").value = isNaN(x) ? lat : x;
};

const get_lng = () => {
  let x = parseFloat(document.getElementById("lng").value);
  return isNaN(x) ? lat : x;
};

const set_lng = (x = lat) => {
  document.getElementById("lng").value = isNaN(x) ? lat : x;
};

const toggle_circle_latlang = () => {
  circle.setLatLng([get_lat(), get_lng()]);
};

const toggle_circle_radius = (val = 0) => {
  circle.setRadius(Number(val));
};

const set_view_marker = (latitude, longitude) => {
  theMap.setView([latitude, longitude]);
  marker.setLatLng([latitude, longitude]);
};

const try_location = () => {
  try {
    navigator.geolocation.getCurrentPosition((position) => {
      set_lat(position.coords.latitude);
      set_lng(position.coords.longitude);
    });
  } catch (error) {}
};
