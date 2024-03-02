import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { addOffset, addTileLayer, validateIp } from './helpers';
import icon from '../images/icon-location.svg';
import { getAdress } from './helpers/get-adress';

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
});

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
  center: [51.505, -0.09],
  zoom: 13,
  zoomControl: false,
});

addTileLayer(map);

L.marker([51.505, 0.09], { icon: markerIcon }).addTo(map);

function getData() {
  if (validateIp(ipInput.value)) {
    fetch(`
    https://geo.ipify.org/api/v2/country?apiKey=at_igcHGhCgTceF5LAHzPSITQrACAenf&ipAddress=${ipInput.value}`)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }
  console.log(data);
}

function handleKay(e) {
  if (e.key === 'Enter') {
    getData();
  }
}

function setInfo(mapData) {
  console.log(mapData.location);
  const { lat, lng, country, region, timezone } = mapData.location;

  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = country + '' + region;
  timezoneInfo.innerText = timezone;
  ispInfo.innerText = mapData.isp;

  map.setView([lat, lng]);
  L.marker([lat, lng], { icon: markerIcon }).addTo(map);

  if (matchMedia('(max-width: 1023px)').matches) {
    addOffset(map);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getAdress('102.22.22.1').then(setInfo);
});

//* at_igcHGhCgTceF5LAHzPSITQrACAenf
