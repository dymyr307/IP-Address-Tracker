//! at_igcHGhCgTceF5LAHzPSITQrACAenf
// .finder {
// }
// .title {
// }
// .search-bar {
// }
// .search-bar__input {
// }
// .search-bar__btn {
// }
// .info {
// }
// .info__block {
// }
// .info__block-subtitle {
// }
// .info__block-title {
// }

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKay);

function getData() {
  //
  fetch(`
  https://geo.ipify.org/api/v2/country?apiKey=at_igcHGhCgTceF5LAHzPSITQrACAenf&ipAddress=${ipInput.value}`)
    .then((response) => response.json())
    .then(console.log);
}

function handleKay(e) {
  if (e.key === 'Enter') {
    getData();
  }
}
