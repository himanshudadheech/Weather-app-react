import React, { Component } from "react";

export default class CityNotFound extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="card d-flex justify-content-center align-items-center"
          style={{ width: "750px", height: "100px" }}
        >
          City Name not found
        </div>
      </div>
    );
  }
}
