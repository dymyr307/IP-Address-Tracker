import L from 'leaflet';

export function addTileLayer(map) {
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://github.com/dymyr307/IP-Address-Tracker">V. Dema</a>',
  }).addTo(map);
}
