import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <div className="top-bar">
          <input type="button" value="X" className="close-button" />
        </div>

        <div id="rectangle">
          <form id="searchThings">
            <input type="text" placeholder="Type a city" id="searchBar" />
            <input type="button" value="Search" id="searchButton" />
            <input type="button" value="Current location" id="locationButton" />
          </form>

          <span>
            <h1 id="cityName">OSLO</h1>
          </span>
          <div id="date">
            <h3>WEDNESDAY 14, 15:36</h3>
          </div>

          <div id="weather">
            <span id="temperature">
              <span id="icon">
                <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="icon weather"
                  id="icon-w"
                />
              </span>
              <span id="temperatureNumber"> 17 </span>
              <span id="FahPlusCel">
                <span id="celsius-un">
                  <button className="click" type="click" id="celsius">
                    °C
                  </button>
                </span>
                <span id="separator">|</span>
                <span id="fahrenheit-un">
                  <button className="click" type="click" id="fahrenheit">
                    °F
                  </button>
                </span>
              </span>
            </span>

            <span className="weatherAllInformation">
              <ul>
                <li>
                  <span id="description"></span>
                </li>
                <li>
                  Humidity: <span id="humidity"></span> %
                </li>
                <li>
                  Wind: <span id="wind"></span> km/h
                </li>
              </ul>
            </span>
          </div>

          <hr />

          <div className="weather-forecast" id="forecast"></div>
        </div>
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
}
