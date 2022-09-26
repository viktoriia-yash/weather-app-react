import "./App.css";

export default function App() {
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
            <h1 className="cityName">Oslo</h1>
          </span>
          <div id="date">
            <h3>Sunday 19:00</h3>
          </div>
        </div>

        <div className="weatherAllInformationt">
          <span id="temperatureToday">
            <span id="icon-container">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="icon weather"
                id="icon-pic"
              />
            </span>
            <span id="temperatureNumber">23</span>
            <span id="FahPlusCel">
              <span id="celsius-un">
                <a href="#" id="celsius">
                  °C
                </a>{" "}
              </span>
              <span id="separator">|</span>
              <span id="fahrenheit-un">
                {" "}
                <a href="#" id="fahrenheit">
                  °F
                </a>
              </span>
            </span>
          </span>

          <span className="weatherDesc">
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

        <div className="weatherForecast" id="forecast"></div>
      </div>
      <p className="credit">
        <a
          href="https://github.com/viktoriia-yash/weather-app-react"
          className="github"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Viktoriia Yashkina
      </p>
    </div>
  );
}
