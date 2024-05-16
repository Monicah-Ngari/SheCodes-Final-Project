import React from "react";
import axios from "axios";
import Day from "./Day";

export default function WeatherForecast(props) {
  const weatherData = props.weatherData;
  function handleResponse(response) {
    console.log(response.data);
  }

  let apikey = "1a2a473db97faf41f0088oe8t98271ff";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units= metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>
            <strong>
              {" "}
              <Day date={weatherData.date} />
            </strong>
          </div>
          <div>
            <img src={weatherData.icon} alt="Weather Icon" />
          </div>
          <div>
            <span className="max-forecast">19 °</span>
            <span className="min-forecast">13 °</span>
          </div>
        </div>
      </div>
    </div>
  );
}
