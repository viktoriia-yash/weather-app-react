import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./App.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let apiKey = "1766cbbe43ef71cdc8ece5c867ddb581";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}$units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
