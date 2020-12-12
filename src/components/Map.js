// react
import React, { useState } from "react";

// react app componenets
import InteractiveMap, { Marker } from "react-map-gl";
import { Paper } from '@material-ui/core';

import { Grid } from "@material-ui/core";

// donners pointer
import DonorPin from "./DonorPin";
// request button
import MainButton from "./main_button/MainButton";
// active users card
import ActiveUsersCard from "./active_users_card/active_users_card";


let Map = ({ latitude, longitude }) => {
  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    width: "100vw",
    height: "100vh",
    zoom: 13,
  });

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
        style={{ zIndex: 50 }}
      >
        {/* donor locaion */}
        <Marker key={"001"} latitude={latitude} longitude={longitude}>
          <DonorPin />
        </Marker>
      </InteractiveMap>
      {/* /map */}
      {/* request button */}
      <MainButton />
      <ActiveUsersCard />
      <Paper
        elevation={3}
        style={{
          position: "absolute",
          bottom: 350,
          left: 20,
          width: 100,
          padding: 20,
          zIndex: 50,
        }}
      >
        <h5 style={{ color: "blue" }}>Current Location:</h5> <br />
        <h5>
          {longitude.toFixed(2)} {latitude.toFixed(2)}
        </h5>
      </Paper>

    </Grid>
  );
};

export default Map;
