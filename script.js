function showMap() {
  document.getElementById('map-container').style.visibility = "visible";
}

const mapId = 'map-id';
const defaultCoords = [50.792073, -1.063223];
const defaultZoom = 13;
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileAttrib = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
let markers = [];
let map;

map = L.map(mapId).setView(defaultCoords, defaultZoom);
map.scrollWheelZoom.disable();
map.doubleClickZoom.disable();
map.boxZoom.disable();

L.tileLayer(tileUrl, {
attribution: tileAttrib
}).addTo(map);

const defaultMarker = L.marker(defaultCoords, {
  draggable: false
}).addTo(map).bindPopup('Winter Road ༆');

// Image Slideshow Section

// Map through each image and change the image every 5 seconds
var images = ["./img/kitchen3.jpeg", "./img/living2.jpeg", "./img/living1.jpeg", "./img/bed1.jpeg", "./img/bed2.jpeg", "./img/bed3.jpeg"];
var i = 0;
function changeImage() {
  document.getElementById("imgName").src = images[i];
  i++;
  if (i == images.length) {
    i = 0;
  } 
}
setInterval(changeImage, 4500);

function openImg(imgName) {
  var i, x;
  x = document.getElementsByClassName("picture");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(imgName).style.display = "block";
}

changeImage()