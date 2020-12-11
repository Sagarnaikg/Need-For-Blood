import React from 'react';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import * as users from "../data/users.json";

const style = {
  paperStyle: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: '2%',
    height: '90vh',
    square: false,
    padding: 15
  },
};

export default function User() {
  return (
  <>
    <h2 style={{marginLeft:20}}>Requested Users</h2>
    {users.features.map(user => (
      <Paper elevation={3} style={style.paperStyle} key={user.properties.PARK_ID}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <img src="avatar.png" alt="avatar" style={{height:70}}/>
          </Grid>
          <Grid item xs={8}>
            <strong>{user.properties.NAME}</strong>
            <p>{user.properties.NAME_FR}</p>
          </Grid>
        </Grid>
      </Paper>
    ))}

  </>
  )
}
