import React, { useState } from 'react';
import axios from 'axios';
import styles from '../app/globals.css';

const Weather = () => {
  const [address, setAddress] = useState('');
  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);


  const fetchCoordinates = async () => {
    const apiKey = process.env.GOOGLE_ACCESS_TOKEN;
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=Your_Key`
      );
      console.log(response)
      return response
    } catch (error) {
      console.error('Error fetching coordinates:', error);
      setError('Failed to fetch coordinates data. Please try again later.');
      return null;
    }
  };

  const fetchWeather = async () => {
    console.log('fetching weather')
    const geodata = await fetchCoordinates()
    const geodatajson = await geodata.json()
    const coordinates = geodatajson.results[0].geometry.location
    try {
      console.log('calling weather api with ')
      console.log(coordinates)
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lng}&hourly=temperature_2m`
      );
      let weatherdata;
      weatherdata = await response.json(); // Adjust according to API response
      console.log(weatherdata)

      const now = new Date();
      const time = now.getHours();
      const temperature = weatherdata.hourly.temperature_2m[time];
      console.log(temperature)
      setTemperature(temperature);

    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Failed to fetch weather data. Please try again later.');
    }
  };

  const handleButtonClick = () => {
    setIsVisible(!isVisible); // Toggle visibility state
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          fetchWeather();
          handleButtonClick();
        }}>
          <div>
            <label htmlFor="address"></label>
            <input
              className='input'
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit" className='button'>Get Weather</button>
        </form>
        {isVisible && (
        <div className='output' id="myDIV">
          <p1 className= 'nomargin'>Current temperature in {address} is {temperature}°C</p1>
        </div>
      )}
      </div>
    </div>
  );
};

export default Weather;
