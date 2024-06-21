"use server";

export async function getWeatherInfo(lat, lng, timeZone) {
  
  const parameters = [
    "temperature_2m_max",
    "temperature_2m_min",
    "apparent_temperature_max",
    "apparent_temperature_min",
    "precipitation_sum",
    "rain_sum",
    "snowfall_sum",
    "precipitation_hours",
    "weather_code",
    "sunrise",
    "sunset",
    "daylight_duration",
    "wind_speed_10m_max",
    "wind_gusts_10m_max",
    "wind_direction_10m_dominant",
  ].join(",");
  let url = new URL(
    "https://api.open-meteo.com/v1/forecast?latitude=&longitude=&daily=&timezone="
  );
  url.searchParams.set("latitude", lat);
  url.searchParams.set("longitude", lng);
  url.searchParams.set("daily", parameters);
  url.searchParams.set("timezone", timeZone);
  const weatherData = await fetch(url);
  const transformedWeatherData = await weatherData.json();
  return transformedWeatherData;
}
