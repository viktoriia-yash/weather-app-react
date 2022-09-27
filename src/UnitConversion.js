import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="numberAndUnits">
        <span id="temperatureNumber">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" rel="noopener noreferrer" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="numberAndUnits">
        <span id="temperatureNumber">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" rel="noopener noreferrer" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
