// react
import React, { useState } from "react";

// react app componenets
import InteractiveMap, { Marker } from "react-map-gl";

import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

// donners pointer
import DonorPin from "./DonorPin";
// request button
import MainButton from "./MainButton";

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
      <div style={{ position: "absolute", left: "50%", top: 20 }}>
        <Paper
          elevation={3}
          style={{
            position: "relative",
            left: "-50%",
            width: 150,
            padding: 20,
            zIndex: 50,
          }}
        >
          <h4 style={{ textAlign: "center" }}>Active Users</h4>
          <h3 style={{ color: "blue", textAlign: "center", padding: 5 }}>
            12500
          </h3>
        </Paper>
      </div>
    </Grid>
  );
};

export default Map;
