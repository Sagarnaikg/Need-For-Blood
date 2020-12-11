// react
import React, { useState } from "react";

// react app componenets
import InteractiveMap, {
  Marker,
  GeolocateControl,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";

import { Grid } from "@material-ui/core";

import * as parkDate from "../data/users.json";

// user location pointer
import Pin from "./Pin";
// donners pointer
import DonorPin from "./DonorPin";
// request button
import MainButton from "./MainButton";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const scaleControlStyle = {
    position: "absolute",
    bottom: 36,
    left: 0,
    padding: "10px",
  };

  const [markers, setMarkers] = React.useState([]);
  /*   const handleClick = ({ lngLat: [longitude, latitude] }) => {
    setMarkers((markers) => [{ longitude, latitude }]);
  }; */

  return (
    <Grid container>
      <InteractiveMap
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoidGVhbS1kZWNvZGVycyIsImEiOiJja2lrMno5MHEwNXduMnRveW1xbHZmbm9qIn0.vJTY7weN0PdZe8qh9fgcRA"
        }
        mapStyle="mapbox://styles/team-decoders/ckik3z2q00l4j17ujgfec17vn"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        /*  onClick={handleClick} */
        style={{ zIndex: 50 }}
      >
        {markers.length
          ? markers.map((m, i) => (
              <Marker {...m} key={i}>
                <div
                  style={{
                    height: 200,
                    width: 200,
                    background:
                      "radial-gradient(100px circle at center, rgba(255,82,82,0.7) 0%, rgba(0,128,128,0) 100%)",
                    transform: "translateY(-100px) translateX(-100px)",
                    zIndex: -1,
                  }}
                >
                  {console.log(
                    `Clicked here: \n ${m.longitude}, ${m.latitude}`
                  )}
                  <Pin />
                </div>
              </Marker>
            ))
          : null}

        {parkDate.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <DonorPin />
          </Marker>
        ))}

        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>
      </InteractiveMap>

      <MainButton />
    </Grid>
  );
}
