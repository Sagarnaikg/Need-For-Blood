import React, { useEffect, useState } from "react";

import Map from "./components/Map";

import { CircularProgress } from "@material-ui/core";

function App() {
  /*  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
 */
  /*   useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(position.coords);
      });
    }
  }, []); */

  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
