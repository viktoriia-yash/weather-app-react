import React from "react";
import ShowDate from "./ShowDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

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
          <UnitConversion celsius={props.data.temperature} />
        </span>

        <span className="weatherDesc">
          <ul>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </span>
      </div>

      <hr />
    </div>
  );
}
