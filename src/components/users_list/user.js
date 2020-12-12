import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import * as users from "../../data/users.json";
import "./users.css";

export default function User() {
  let [count, setCount] = useState(0);
  const [pendingUSers, setPendingUsers] = useState(users.features);
  const [acceptedUsers, setAcceptedUSers] = useState([]);

  let replaceUsers = setInterval(() => {
    /* setAcceptedUSers([...acceptedUsers, pendingUSers[count]]);
    setCount((count += 1));

    if (count === 3) {
      clearInterval(replaceUsers);
    } */

    setAcceptedUSers([...acceptedUsers, pendingUSers[count]]);
    console.log(acceptedUsers);

    if (count == 3) {
      console.log("True");
      clearInterval(replaceUsers);
    }
  }, 2000);

  return (
    <>
      <h2 style={{ marginLeft: 20 }} className="user-header">
        Requested Users
      </h2>
      {/*  <h4>Accepted</h4>
      {acceptedUsers.map((user, index) => {
        return (
          <div key={user.properties.PARK_ID} className="user-card">
            <Grid container spacing={0}>
              <Grid item xs={2} className="user-img">
                <img
                  src={user.properties.PROFILE}
                  alt="avatar"
                  style={{
                    borderRadius: "50px",
                    height: 50,
                    padding: 3,
                    border: "4px solid var(--primary-red)",
                  }}
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
      })} */}
      <h4>Pending</h4>
      {pendingUSers.map((user, index) => {
        if (index > 2) {
          return (
            <div key={user.properties.PARK_ID} className="user-card">
              <Grid container spacing={0}>
                <Grid item xs={2} className="user-img">
                  <img
                    src={user.properties.PROFILE}
                    alt="avatar"
                    style={{
                      borderRadius: "50px",
                      height: 50,
                      padding: 3,
                      border: "4px solid var(--primary-red)",
                    }}
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
                  style={{
                    borderRadius: "50px",
                    height: 50,
                    padding: 3,
                    border: "4px solid var(--primary-green)",
                  }}
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
      })}
    </>
  );
}
