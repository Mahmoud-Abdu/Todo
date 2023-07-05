import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherCard = ({ city, date, temperature, description, feelsLike }) => (
  <Card variant="outlined" sx={{ maxWidth: 300, margin: 2 }}>
    <CardContent>
      <Typography variant="body2">City: {city}</Typography>
      <Typography variant="body2">Date: {date}</Typography>
      <Typography variant="body2">Temperature: {temperature}°C</Typography>
      <Typography variant="body2">Feels Like: {feelsLike}°C</Typography>
      <Typography variant="body2">Description: {description}</Typography>
    </CardContent>
  </Card>
);

export default WeatherCard;
