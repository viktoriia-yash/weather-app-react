import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "1766cbbe43ef71cdc8ece5c867ddb581";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="page">
        <div className="weather-container">
          <div className="searchThings">
            <form id="search" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a city"
                autoFocus="on"
                className="searchBar"
                onChange={handleCityChange}
              />
              <input type="submit" value="Search" className="searchButton" />
            </form>
          </div>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        <p className="credit">
          <a
            href="https://github.com/viktoriia-yash/weather-app-react"
            className="github"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Viktoriia Yashkina
        </p>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
