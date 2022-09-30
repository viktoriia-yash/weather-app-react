import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }

  function minTemp() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }

  function dayForecast() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return week[day];
  }

  return (
    <div>
      <div className="forecastDay">{dayForecast()}</div>
      <div className="forecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="forecastTemperature">
        <span className="maxTempForecast">{maxTemp()}</span>
        <span className="minTempForecast">{minTemp()}</span>
      </div>
    </div>
  );
}
