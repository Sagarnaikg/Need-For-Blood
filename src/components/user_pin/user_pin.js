import React from "react";

import "./user_pin.css";

// image
import userSvg from "../../data/assets/user_marker.svg";

const UserPin = ({ zoomLevel }) => {
  /* min 7 max 13 */

  /* let size = Math.ceil(zoomLevel * 33.3333333333 - 233.3333333333); */

  let size = 133.33 * zoomLevel - 1533.33;

  size = size < 0 ? 0 : size;

  return (
    <div className="wrapper">
      <div
        className="first"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <img src={userSvg} alt="user" className="pin" />
      </div>
    </div>
  );
};

export default UserPin;
