import React from "react";

export default function App() {
  const [city, setCity] = React.useState("");
  const [weatherData, setWeatherData] = React.useState(null);
  const apiKey = "7dc6b80afefc47679f35495402601627";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  async function CheckWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data)
    if (response.ok) {
      setWeatherData(data);
    }
  }


  return (
    <div className="card">
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          name="city"
          value={city}
          spellCheck="false"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => CheckWeather(city)}>
          <img src="src/images/search.png" />
        </button>
      </div>
      <div className="error">Invalid city name</div>
      {weatherData ? (
        <div className="weather">
          <img src={`src/images/${weatherData.weather[0].main.toLowerCase()}.png`} className="w-icon" />
          <h1>{Math.round(weatherData.main.temp)}°c</h1>
          <h2>{weatherData.name}</h2>
          <div className="details">
            <div className="col">
              <img src="src/images/humidity.png" />
              <div>
                <p>{weatherData.main.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="src/images/wind.png" />
              <div>
                <p>{weatherData.wind.speed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
