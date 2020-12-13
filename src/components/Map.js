// react
import React, { useState } from "react";

// react app componenets
import InteractiveMap, { Marker } from "react-map-gl";

import { Grid } from "@material-ui/core";

// donners pointer
import DonorPin from "./donor_pin/donor_pin";
// user pointer
import UserPin from "./user_pin/user_pin";
// red donors
import DonorPinRange from "./donors_pin_within_range/donors_range_pin";
// request button
import MainButton from "./main_button/MainButton";
// active users card
import ActiveUsersCard from "./active_users_card/active_users_card";
// location card
import LocationCard from "./location_card/location_card.js";

let createDonorsRange = (latMin, latMax, logMin, lonMax) => {
  let getRndInteger = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  let positions = [];
  for (let i = 0; i < 5; i++) {
    let lat = getRndInteger(latMin, latMax);
    let long = getRndInteger(logMin, lonMax);

    positions.push({
      lat: lat,
      log: long,
    });
  }

  return positions;
};

let createDonors = (latMin, latMax, logMin, lonMax) => {
  let getRndInteger = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  let positions = [];
  for (let i = 0; i < 50; i++) {
    let lat = getRndInteger(latMin, latMax);
    let long = getRndInteger(logMin, lonMax);

    if (lat >= 12.967 && lat <= 12.984 && long >= 77.59 && long <= 77.6075) {
    } else {
      positions.push({
        lat: lat,
        log: long,
      });
    }
  }

  return positions;
};

let Map = (/* { latitude, longitude } */) => {
  const [zoomLevel, setZoonLevel] = useState(13);
  const [viewport, setViewport] = useState({
    latitude: 12.98,
    longitude: 77.6,
    width: "100vw",
    height: "100vh",
    zoom: 13,
  });

  const [positions, setPositions] = useState(
    createDonors(10.5, 14.5, 75.5, 79.5)
  );

  const [nearByUsers, setNear] = useState(
    createDonors(12.95, 13, 77.54, 77.66)
  );

  const [donorsRange, setRange] = useState(
    createDonorsRange(12.967, 12.983, 77.59, 77.607)
  );

  return (
    <Grid container>
      <InteractiveMap
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoidGVhbS1kZWNvZGVycyIsImEiOiJja2lrMno5MHEwNXduMnRveW1xbHZmbm9qIn0.vJTY7weN0PdZe8qh9fgcRA"
        }
        mapStyle="mapbox://styles/team-decoders/ckik3z2q00l4j17ujgfec17vn"
        onViewportChange={(viewport) => {
          setZoonLevel(viewport.zoom);
          setViewport(viewport);
        }}
        style={{ zIndex: 50 }}
      >
        {/* location points */}
        <Marker key={"001"} latitude={12.98} longitude={77.6}>
          <UserPin zoomLevel={zoomLevel} />
        </Marker>

        {positions.map((position) => {
          return (
            <Marker
              key={position["lat"]}
              latitude={position["lat"]}
              longitude={position["log"]}
            >
              <DonorPin zoomLevel={zoomLevel} />
            </Marker>
          );
        })}
        {nearByUsers.map((position) => {
          return (
            <Marker
              key={position["lat"]}
              latitude={position["lat"]}
              longitude={position["log"]}
            >
              <DonorPin zoomLevel={zoomLevel} />
            </Marker>
          );
        })}

        <Marker key={"001"} latitude={12.975} longitude={77.6}>
          <DonorPinRange />
        </Marker>

        <Marker key={"001"} latitude={12.978} longitude={77.595}>
          <DonorPinRange />
        </Marker>

        <Marker key={"001"} latitude={12.979} longitude={77.597}>
          <DonorPinRange />
        </Marker>

        <Marker key={"001"} latitude={12.984} longitude={77.603}>
          <DonorPinRange />
        </Marker>

        <Marker key={"001"} latitude={12.979} longitude={77.608}>
          <DonorPinRange />
        </Marker>

        {/* {donorsRange.map((position) => {
          return (
            <Marker
              key={position["lat"]}
              latitude={position["lat"]}
              longitude={position["log"]}
            >
              <DonorPinRange />
            </Marker>
          );
        })} */}
      </InteractiveMap>
      {/* /map */}
      {/* request button */}
      <MainButton />
      <ActiveUsersCard />
      <LocationCard latitude={12.98} longitude={77.6} />
    </Grid>
  );
};

export default Map;
