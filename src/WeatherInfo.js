import React from "react";
import ShowDate from "./ShowDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="cityAndDate">
        <span>
          <h1 className="cityName">{props.data.city}</h1>
        </span>
        <div id="date">
          <h3>
            <ShowDate date={props.data.date} />
          </h3>
        </div>
      </div>

      <div className="weatherAllInformationt">
        <span id="temperatureToday">
          <span id="icon-container">
            <WeatherIcon code={props.data.icon} />
          </span>
          <span id="temperatureNumber">
            {Math.round(props.data.temperature)}
          </span>
          <span id="FahPlusCel">
            <span id="celsius-un">
              <a href="/" id="celsius" rel="noreferrer">
                °C
              </a>{" "}
            </span>
            <span id="separator">|</span>
            <span id="fahrenheit-un">
              {" "}
              <a href="/" id="fahrenheit" rel="noreferrer">
                °F
              </a>
            </span>
          </span>
        </span>

        <span className="weatherDesc">
          <ul>
            <li>
              <span id="description">{props.data.description}</span>
            </li>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span> %
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span> km/h
            </li>
          </ul>
        </span>
      </div>

      <hr />
    </div>
  );
}
