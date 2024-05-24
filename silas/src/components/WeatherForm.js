"use client";

import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import { getWeatherInfo } from "@/weather-at-location/action";

export default function WeatherForm() {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getWeatherInfo(
        params.coordinates[0],
        params.coordinates[1],
        params.coordinates[2] + "/" + params.coordinates[3]
      );
      if (result && result.daily) {
        // Create an array of day objects.
        const days = result.daily.time.map((time, i) => {
          return {
            time: time,
            temperature_2m_max: result.daily.temperature_2m_max[i],
            temperature_2m_min: result.daily.temperature_2m_min[i],
            apparent_temperature_max: result.daily.apparent_temperature_max[i],
            apparent_temperature_min: result.daily.apparent_temperature_min[i],
            precipitation_sum: result.daily.precipitation_sum[i],
            rain_sum: result.daily.rain_sum[i],
            snowfall_sum: result.daily.snowfall_sum[i],
            precipitation_hours: result.daily.precipitation_hours[i],
            weather_code: result.daily.weather_code[i],
            sunrise: result.daily.sunrise[i],
            sunset: result.daily.sunset[i],
            daylight_duration: result.daily.daylight_duration[i],
            wind_speed_10m_max: result.daily.wind_speed_10m_max[i],
            wind_gusts_10m_max: result.daily.wind_gusts_10m_max[i],
            wind_direction_10m_dominant:
              result.daily.wind_direction_10m_dominant[i],
          };
        });
        setData(days);
      }
    }
    fetchData();
  }, [params.coordinates]);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {data &&
        data.map((day, index) => (
          <div
            key={index}
            style={{
              width: "33%",
              boxSizing: "border-box",
              padding: "10px",
              border: "2px solid black",
            }}
          >
            <h2>Day {index + 1}</h2>
            <p>Max Temperature: {day.temperature_2m_max} °C</p>
            <p>Min Temperature: {day.temperature_2m_min} °C</p>
            <p>Max Apparent Temperature: {day.apparent_temperature_max} °C</p>
            <p>Min Apparent Temperature: {day.apparent_temperature_min} °C</p>
            <p>Precipation Sum: {day.precipitation_sum} mm</p>
            <p>Rain Sum: {day.rain_sum} mm</p>
            <p>Snowfall Sum: {day.snowfall_sum} cm</p>
            <p>Precipation Hours: {day.precipitation_hours} hours</p>
            <p>Weather Code: {day.weather_code} %</p>
            <p>Sunrise: {day.sunrise}</p>
            <p>Sunset: {day.sunset}</p>
            <p>Daylight Duration: {day.daylight_duration} seconds</p>
            <p>Wind Speed Max: {day.wind_speed_10m_max} km/h</p>
            <p>Wind Gusts Max: {day.wind_gusts_10m_max} km/h</p>
            <p>Wind Direction: {day.wind_direction_10m_dominant} °</p>
          </div>
        ))}
    </div>
  );
}
