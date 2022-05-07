import React from "react";

export default function NavBar() {
  return (
    <div
      style={{
        backgroundColor: "indigo",
        color: "white",
        width: "100%",
        height: "80px",
      }}
      className="d-flex align-items-center"
    >
      <div
        style={{
          fontSize: "25px",
          marginLeft: "15px",
        }}
      >
        Weather App
      </div>
    </div>
  );
}
