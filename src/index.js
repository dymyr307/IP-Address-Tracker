import { validateIp } from './helpers';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKay);

function getData() {
  if (validateIp(ipInput.value)) {
    fetch(`
    https://geo.ipify.org/api/v2/country?apiKey=at_igcHGhCgTceF5LAHzPSITQrACAenf&ipAddress=${ipInput.value}`)
      .then((response) => response.json())
      .then(console.log);
  }
}

function handleKay(e) {
  if (e.key === 'Enter') {
    getData();
  }
}

//* at_igcHGhCgTceF5LAHzPSITQrACAenf
