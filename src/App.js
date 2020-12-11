import React, { useEffect, useState } from "react";

import Map from "./components/Map";

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
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
    // todo:implemant loading here
    return <div>Loading</div>;
  }
}

export default App;
