import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "02d": "PARTLY_CLOUDY_DAY",
    "03d": "PARTLY_CLOUDY_DAY",
    "04d": "CLOUDY",
    "09d": "SLEET",
    "10d": "RAIN",
    "11d": "WIND",
    "13d": "SNOW",
    "50d": "FOG",
    "01n": "CLEAR_NIGHT",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04n": "CLOUDY",
    "09n": "SLEET",
    "10n": "RAIN",
    "11n": "WIND",
    "13n": "SNOW",
    "50n": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="white"
      size={props.size}
      animate={true}
    />
  );
}
