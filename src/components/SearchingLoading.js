import React from "react";

export default function SearchingLoading() {
  return (
    <div style={{ backgroundColor: "#e4e3e3", height: "100vh" }}>
      <br />
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="card d-flex justify-content-center "
          style={{ width: "750px", height: "100px" }}
        >
          Searching City name...
        </div>
      </div>
    </div>
  );
}
