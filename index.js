const lat = 51.505;
const lng = -0.09;
const zoom = 13;
// Define the map
let theMap = L.map("map-div").setView([lat, lng], zoom);
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
// Go button
const go = () => {
  try {
    let input_lat = parseFloat(document.getElementById("lat").value);
    input_lat = isNaN(input_lat) ? lat : input_lat;
    let input_lng = parseFloat(document.getElementById("lng").value);
    input_lng = isNaN(input_lng) ? lng : input_lng;
    set_view_marker(input_lat, input_lng);
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

const empty_inputs = () => {
  document.getElementById("lat").value = "";
  document.getElementById("lng").value = "";
};

const set_view_marker = (latitude, longitude) => {
  theMap.setView([latitude, longitude]);
  marker.setLatLng([latitude, longitude]);
};
