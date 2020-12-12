import React from "react";
import { Grid } from "@material-ui/core";

import * as users from "../../data/users.json";
import "./users.css";

export default function User() {
  const usersList = users.features;

  return (
    <>
      <h2 style={{ marginLeft: 20 }} className="user-header">
        Requested Users
      </h2>

      <h4 className="subTitle">Accepted</h4>

      {usersList.map((user) => {
        if (
          user.properties.NAME === "Douglas Lawson" ||
          user.properties.NAME === "Jim Wheeler"
        ) {
          if (!user.properties.ONLINE) {
            return (
              <div key={user.properties.PARK_ID} className="user-card">
                <Grid container spacing={0}>
                  <Grid item xs={2} className="user-img">
                    <img
                      src={user.properties.PROFILE}
                      alt="avatar"
                      className="user-img-avatar"
                    />
                  </Grid>
                  <Grid item xs={9} className="user-text">
                    <strong className="user-text-header">
                      {user.properties.NAME}
                    </strong>
                    <p className="user-text-msg">18:00</p>
                    <p className="user-text-msg">Accepted</p>
                  </Grid>
                </Grid>
              </div>
            );
          }
          return (
            <div key={user.properties.PARK_ID} className="user-card">
              <Grid container spacing={0}>
                <Grid item xs={2} className="user-img">
                  <img
                    src={user.properties.PROFILE}
                    alt="avatar"
                    className="user-img-avatar1"
                  />
                </Grid>
                <Grid item xs={9} className="user-text">
                  <strong className="user-text-header">
                    {user.properties.NAME}
                  </strong>
                  <p className="user-text-msg">18:00</p>
                  <p className="user-text-msg">Accepted</p>
                </Grid>
              </Grid>
            </div>
          );
        }
        return <></>;
      })}

      <h4 className="subTitle">Pending</h4>
      {usersList.map((user) => {
        if (
          user.properties.NAME === "Douglas Lawson" ||
          user.properties.NAME === "Jim Wheeler"
        ) {
          return <></>;
        } else {
          if (!user.properties.ONLINE) {
            return (
              <div key={user.properties.PARK_ID} className="user-card">
                <Grid container spacing={0}>
                  <Grid item xs={2} className="user-img">
                    <img
                      src={user.properties.PROFILE}
                      alt="avatar"
                      className="user-img-avatar"
                    />
                  </Grid>
                  <Grid item xs={9} className="user-text">
                    <strong className="user-text-header">
                      {user.properties.NAME}
                    </strong>
                    <p className="user-text-msg">18:00</p>
                    <p className="user-text-msg">{user.properties.NAME_FR}</p>
                  </Grid>
                </Grid>
              </div>
            );
          }
          return (
            <div key={user.properties.PARK_ID} className="user-card">
              <Grid container spacing={0}>
                <Grid item xs={2} className="user-img">
                  <img
                    src={user.properties.PROFILE}
                    alt="avatar"
                    className="user-img-avatar1"
                  />
                </Grid>
                <Grid item xs={9} className="user-text">
                  <strong className="user-text-header">
                    {user.properties.NAME}
                  </strong>
                  <p className="user-text-msg">18:00</p>
                  <p className="user-text-msg">{user.properties.NAME_FR}</p>
                </Grid>
              </Grid>
            </div>
          );
        }
      })}
    </>
  );
}
