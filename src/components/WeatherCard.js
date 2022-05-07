import React, { Component } from "react";
import CommentBox from "./CommentBox";

export default class WeatherCard extends Component {
  render() {
    let {
      temp_value,
      location,
      weatherType,
      windSpeed,
      humidity,
      pressure,
      maxTemp,
      minTemp,
      sunrise,
      sunSet,
      country,
    } = this.props;

    return (
      <>
        <div className="d-flex justify-content-center container" >
          <div className="card  " style={{ width: "750px", height: "auto" }}>
            <div>
              <p>
                {location}, {country},{" "}
                {new Date().toLocaleString("en-US", { weekday: "short" })}{" "}
                {new Date().toLocaleString("en-US", { month: "short" })}{" "}
                {new Date().toLocaleString("en-US", { day: "2-digit" })}{" "}
                {new Date().getFullYear()}
              </p>
            </div>
            <div className="row">
              {/* left */}
              <div className="col d-flex align-items-center justify-content-center">
                <p style={{ fontSize: "35px" }}>
                  {temp_value}°C &nbsp;
                  <span>
                    <i className="bi bi-water"></i>
                  </span>
                </p>
              </div>
              {/* right */}
              <div className="col">
                <div>
                  Weather:
                  <span style={{ fontStyle: "bold" }}> {weatherType}</span>
                  <br />
                  Wind:
                  <span style={{ fontStyle: "bold" }}> {windSpeed} Km/hr</span>
                  <br />
                  <br />
                </div>
                <div>
                  Humidity:
                  <span style={{ fontStyle: "bold" }}> {humidity}%</span>
                  <br />
                  Pressure:
                  <span style={{ fontStyle: "bold" }}> {pressure} Pa</span>
                  <br />
                  <br />
                </div>
                <div>
                  Max Temp:
                  <span style={{ fontStyle: "bold" }}> {maxTemp}°C</span>
                  <br />
                  Min Temp:
                  <span style={{ fontStyle: "bold" }}> {minTemp}°C</span>
                  <br />
                  <br />
                </div>
                <div>
                  Sunrise:
                  <span style={{ fontStyle: "bold" }}> {sunrise}</span>
                  <br />
                  Sunset:
                  <span style={{ fontStyle: "bold" }}> {sunSet}</span>
                  <br />
                  <br />
                  {/* s */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <CommentBox />
        <br />
      </>
    );
  }
}
