// react
import React, { useState } from "react";

// react app componenets
import InteractiveMap, {
  Marker,
  ScaleControl,
} from "react-map-gl";

import { Grid } from "@material-ui/core";
import { Paper } from '@material-ui/core';

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
    const handleClick = ({ lngLat: [longitude, latitude] }) => {
    setMarkers((markers) => [{ longitude, latitude }]);
    const long=longitude;
    const lat=latitude;
  };

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
         onClick={handleClick}
        style={{ zIndex: 50 }}
      >
        {markers.length
          ? markers.map((m, i) => (
            <>
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
              <Paper
                  elevation={3}
                  style={{position: "absolute",
                  bottom: 350,
                  left: 20,
                  width: 125,
                  padding:25,
                  zIndex:50}}
                  key={i+1}>
                <h4>Current Location:</h4> <br/>{m.longitude.toFixed(2)} {m.latitude.toFixed(2)}
              </Paper>
              </>
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
      <div style={{position: 'absolute', left: '50%', top: 20}}>
      <Paper
          elevation={3}
          style={{
          position: 'relative',
          left: '-50%',
          width: 150,
          padding:20,
          zIndex:50}}
>
        <h4 style={{textAlign:"center"}}>Active Users</h4>
        <h3 style={{color:'blue', textAlign:"center", padding:5}}>12500</h3>
      </Paper>
      </div>
    </Grid>
  );
}
