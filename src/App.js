import React, { useEffect, useState } from "react";

import Map from "./components/Map";

import { CircularProgress } from "@material-ui/core";

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(position.coords);
      });
    }
  }, []);

  if (latitude && longitude) {
    return (
      <div className="App">
        <Map latitude={latitude} longitude={longitude} />
      </div>
    );
  } else {
    return (
      <CircularProgress
        style={{
          color: "dark blue",
          position: "fixed",
          top: "50%",
          left: "50%",
          marginTop: "-25px",
          marginLeft: "-25px"
        }}
      />
    );
  }
}

export default App;
