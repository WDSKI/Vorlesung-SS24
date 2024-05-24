"use server";

export async function getGeolocation(location) {
  let coordinatesURL = new URL(
    "https://maps.googleapis.com/maps/api/geocode/json?address=&key=THE_KEY"
  );
  coordinatesURL.searchParams.set("address", location);
  const coordinatesResponse = await fetch(coordinatesURL);
  const coordinatesData = await coordinatesResponse.json();
  const {lat, lng} = coordinatesData.results[0].geometry.location
  const timeZoneData = "Europe/Berlin";

  return {
    lat: lat,
    lng: lng,
    timeZone: timeZoneData
  };
}
