import React, { useState, useEffect } from "react";
import axios from "axios";
import Day from "./Day";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  const weatherData = props.weatherData;

  useEffect(() => {
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let longitude = weatherData.coordinates.longitude;
    let latitude = weatherData.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        setForecast(response.data.daily);
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching weather forecast:", error);
      });
  }, [weatherData]);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map((dayForecast) => (
          <div className="col" key={dayForecast.date}>
            <div>
              <strong>
                <Day date={new Date(dayForecast.date)} />
              </strong>
            </div>
            <div>
              <img src={dayForecast.condition.icon_url} alt="Weather Icon" />
            </div>
            <div>
              <span className="max-forecast">
                {Math.round(dayForecast.temperature.maximum)} °
              </span>
              <span className="min-forecast">
                {Math.round(dayForecast.temperature.minimum)} °
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
