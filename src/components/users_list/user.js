import React from "react";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as users from "../../data/users.json";
import "./users.css";

export default function User() {
  const usersList = users.features;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <><div key={user.properties.PARK_ID} className="user-card" >
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
              </>
            );
          }
          return (<>
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
                  <Button variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
                    Details
                  </Button>
                </Grid>
              </Grid>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                key={user.properties.PARK_ID}
              >
                <DialogTitle id="alert-dialog-title"><strong>Potential Donor</strong></DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                  <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <img
                      src={user.properties.PROFILE}
                      alt="avatar"
                      className="user-img-avatar1"
                      style={{display:'inline'}}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <h2 style={{paddingTop:10}}>{user.properties.NAME}</h2>
                  </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={3}><strong>Address:</strong></Grid><Grid item xs={9}>{user.properties.ADDRESS}</Grid>
                    <Grid item xs={3}><strong>Email:</strong></Grid><Grid item xs={9}>{user.properties.EMAIL}</Grid>
                    <Grid item xs={3}><strong>Phone:</strong></Grid><Grid item xs={9}>{user.properties.PHONE}</Grid>
                  </Grid>
                  </DialogContentText>
                </DialogContent>
              </Dialog>
              
            </div>


            </>
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
