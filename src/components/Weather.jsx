import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import { Box } from "@mui/material";
const API_KEY = "14c0cd4ace1af244500f3292e2359919";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [fiveDaysWeather, setFiveDaysWeather] = useState([]);
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  const filter5Days = (data) => {
    const fiveDaysArray = [];
    for (let i = 0; i < data.length; i++) {
      if (i - 1 !== -1) {
        const convertDate1 = new Date(data[i - 1].dt * 1000).toLocaleString();
        const convertDate2 = new Date(data[i].dt * 1000).toLocaleString();
        const formatedDate1 = convertDate1.split(",")[0];
        const formatedDate2 = convertDate2.split(",")[0];
        if (formatedDate1 !== formatedDate2) fiveDaysArray.push(data[i]);
      }
    }

    setFiveDaysWeather(fiveDaysArray);
    console.log("fdw", fiveDaysWeather);
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
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
        );
        console.log(response.data);
        // Update the weather data state with the retrieved data
        await setWeatherData(response.data);
        filter5Days(weatherData.list);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return (
    <div>
      <h1>5-Day Weather Forecast</h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderColor: "text.primary",
        }}
      >
        {weatherData ? (
          fiveDaysWeather.map((item) => (
            <WeatherCard
              key={item.dt}
              city={weatherData.city.name}
              date={new Date(item.dt * 1000).toLocaleDateString()}
              temperature={Math.floor(item.main.temp / 10)}
              feelsLike={Math.floor(item.main.feels_like)}
              description={item.weather[0].description}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </div>
  );
};

export default Weather;
