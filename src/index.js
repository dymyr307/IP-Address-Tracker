import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { addTileLayer, validateIp } from './helpers';
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKay);

//* leafletjs
const markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [20, 30],
  // iconAnchor: [22, 94],
});
const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
  center: [51.505, -0.09],
  zoom: 13,
});

addTileLayer(map);
L.marker([51.505, -0.09], { icon: markerIcon }).addTo(map);
function getData() {
  if (validateIp(ipInput.value)) {
    fetch(`
    https://geo.ipify.org/api/v2/country?apiKey=at_igcHGhCgTceF5LAHzPSITQrACAenf&ipAddress=${ipInput.value}`)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }
}

function handleKay(e) {
  if (e.key === 'Enter') {
    getData();
  }
}

function setInfo(mapData) {
  console.log(mapData);
  ipInfo.innerText = mapData.ip;
  locationInfo.innerText =
    mapData.location.country + '' + mapData.location.region;
  timezoneInfo.innerText = mapData.location.timezone;
  ispInfo.innerText = mapData.isp;
}

//* at_igcHGhCgTceF5LAHzPSITQrACAenf
