import React from "react";
import "./donor_pin.css";

export default function DonorPin({ zoomLevel }) {
  let size = 1.1666 * zoomLevel - 5.16;

  size = size < 0 ? 0 : size;

  let size1 = 3.3333 * zoomLevel - 23.3333;

  size1 = size1 < 0 ? 0 : size1;

  return (
    <div
      className="outer"
      style={{ width: `${size1}px`, height: `${size1}px` }}
    >
      <div
        className="inner"
        style={{ width: `${size}px`, height: `${size}px` }}
      ></div>
    </div>
  );
}
