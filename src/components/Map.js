import React, { useState } from "react";
import InteractiveMap, { Marker, GeolocateControl, NavigationControl, FullscreenControl, ScaleControl} from "react-map-gl";
import { Grid } from '@material-ui/core';


import * as parkDate from "../data/users.json";
import Pin from './Pin';
import DonorPin from './DonorPin';
import MainButton from './MainButton';

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10
  };

  const fullscreenControlStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
  };

  const navStyle = {
    position: 'absolute',
    top: 72,
    left: 0,
    padding: '10px'
  };

  const scaleControlStyle = {
    position: 'absolute',
    bottom: 36,
    left: 0,
    padding: '10px'
  };

  const [markers, setMarkers] = React.useState([])
  const handleClick = ({lngLat: [longitude, latitude]}) =>{
      setMarkers(markers => [{longitude, latitude}])
  }


  return (
    <Grid container>
      <InteractiveMap
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/moreducks/cki8wapi813ij19o19o698881"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        onClick={handleClick}
        style={{zIndex:50}}
      >

      {markers.length? markers.map((m, i) => (

          <Marker {...m} key={i} >
            <div style=
              {{
                height:200,
                width:200,
                background:'radial-gradient(100px circle at center, rgba(255,82,82,0.7) 0%, rgba(0,128,128,0) 100%)',
                transform: 'translateY(-100px) translateX(-100px)',
                zIndex:-1
              }}
            >
              {console.log(`Clicked here: \n ${m.longitude}, ${m.latitude}`)}
              <Pin/>
            </div>
          </Marker>

        ))
      : null}

      {parkDate.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          latitude={park.geometry.coordinates[1]}
          longitude={park.geometry.coordinates[0]}
        >
          <DonorPin/>
        </Marker>
      ))}


      <GeolocateControl
        style={geolocateStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
      />

      <div style={fullscreenControlStyle}>
        <FullscreenControl />
      </div>

      <div style={navStyle}>
        <NavigationControl />
      </div>

      <div style={scaleControlStyle}>
        <ScaleControl />
      </div>

      </InteractiveMap>

      <MainButton />

    </Grid>
  );
}
