import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const API_KEY = "14c0cd4ace1af244500f3292e2359919";
  const [weatherData, setWeatherData] = useState(null);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  const error = () => {
    console.log("unable to retrive location");
  };

  useEffect(() => {
    // Retrieve the user's geolocation data
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      
      console.log("latt", latitude, longitude);

      try {
        // Make a request to OpenWeatherMap API
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
        );

        // Update the weather data state with the retrieved data
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
