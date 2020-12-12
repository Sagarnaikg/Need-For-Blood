import React from "react";
import "./location_card.css";

const LocationCard = ({ latitude, longitude }) => {
  return (
    <div
      className="location-card"
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        width: 160,
        padding: 20,
        zIndex: 60,
      }}
    >
      <h5> Current Location:</h5> <br />
      <ul>
        <li>{latitude.toFixed(2)}</li>
        <li>{longitude.toFixed(2)}</li>
      </ul>
    </div>
  );
};

export default LocationCard;
