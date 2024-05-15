import React from "react";
import Day from "./Day";

export default function WeatherForecast({ weatherData }) {
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
