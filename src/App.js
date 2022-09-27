import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Sunday 09:00",
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="page">
        <div className="weather-container">
          <div className="searchThings">
            <form id="search">
              <input
                type="text"
                placeholder="Enter a city"
                autoFocus="on"
                className="searchBar"
              />
              <input type="button" value="Search" className="searchButton" />
              <input
                type="button"
                value="Current location"
                className="locationButton"
              />
            </form>
          </div>

          <div className="cityAndDate">
            <span>
              <h1 className="cityName">{weatherData.city}</h1>
            </span>
            <div id="date">
              <h3>{weatherData.date}</h3>
            </div>
          </div>

          <div className="weatherAllInformationt">
            <span id="temperatureToday">
              <span id="icon-container">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="icon-pic"
                />
              </span>
              <span id="temperatureNumber">
                {Math.round(weatherData.temperature)}
              </span>
              <span id="FahPlusCel">
                <span id="celsius-un">
                  <a href="/" id="celsius">
                    °C
                  </a>{" "}
                </span>
                <span id="separator">|</span>
                <span id="fahrenheit-un">
                  {" "}
                  <a href="/" id="fahrenheit">
                    °F
                  </a>
                </span>
              </span>
            </span>

            <span className="weatherDesc">
              <ul>
                <li>
                  <span id="description">{weatherData.description}</span>
                </li>
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span> %
                </li>
                <li>
                  Wind: <span id="wind">{weatherData.wind}</span> km/h
                </li>
              </ul>
            </span>
          </div>

          <hr />
        </div>
        <p className="credit">
          <a
            href="https://github.com/viktoriia-yash/weather-app-react"
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Viktoriia Yashkina
        </p>
      </div>
    );
  } else {
    const apiKey = "1766cbbe43ef71cdc8ece5c867ddb581";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
