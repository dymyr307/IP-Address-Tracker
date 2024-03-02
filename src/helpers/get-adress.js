export async function getAdress(ip = '8.8.8.8') {
  const response = await fetch(`
    https://geo.ipify.org/api/v2/country?apiKey=at_igcHGhCgTceF5LAHzPSITQrACAenf&ipAddress=${ip}`);
  return await response.json();
}
