import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import User from "./User";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "20vw",
    },
  },
}));

const bloodtypes = [
  {
    value: "A",
    label: "A",
  },
  {
    value: "B",
    label: "B",
  },
  {
    value: "O",
    label: "O",
  },
  {
    value: "AB",
    label: "AB",
  },
];

export default function MainForm() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const [phone, setPhone] = React.useState("");
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const [bloodtype, setBloodtype] = React.useState("O");
  const handleDropChange = (event) => {
    setBloodtype(event.target.value);
  };

  const [submit, setSubmit] = React.useState(false);
  const handleFormSubmit = () => {
    setSubmit(true);
  };

  return (
    <>
      {!submit && (
        <ValidatorForm
          value={submit}
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <Typography
            gutterBottom
            style={{ marginTop: 15, marginLeft: 20 }}
            variant="h6"
          >
            Please Enter Your Details
          </Typography>

          <div>
            <TextValidator
              label="Name"
              value={name}
              onChange={handleChange}
              variant="outlined"
              validators={["required", "matchRegexp:^[a-zA-Zs]+$"]}
              errorMessages={[
                "Please enter your name",
                "Please enter valid name",
              ]}
              style={{ width: 300, marginLeft: 20 }}
            />
          </div>

          <div>
            <TextValidator
              label="Phone No"
              value={phone}
              onChange={handlePhoneChange}
              variant="outlined"
              validators={["required", "matchRegexp:^[0-9]{10}$"]}
              errorMessages={[
                "Please enter your phone number",
                "Please enter valid 10-digit phone number",
              ]}
              style={{ width: 300, marginLeft: 20 }}
            />
          </div>

          <div>
            <TextField
              id="select-blood-type"
              select
              label="Select Blood Type"
              value={bloodtype}
              onChange={handleDropChange}
              SelectProps={{
                native: true,
              }}
              helperText="Please select required bloodtype"
              variant="outlined"
              style={{ width: 300, marginLeft: 20 }}
            >
              {bloodtypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>

          <div>
            <TextField
              id="outlined-multiline-static"
              label="Request Message (Optional)"
              multiline
              rows={6}
              variant="outlined"
              style={{ width: 300, marginLeft: 20 }}
            />
          </div>

          <div className={classes.root}>
            <Typography
              id="discrete-slider"
              gutterBottom
              style={{ marginLeft: 20 }}
            >
              Select Range (in km)
            </Typography>
            <Slider
              defaultValue={3}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={11}
              style={{ width: 300, marginLeft: 20 }}
            />
          </div>

          <div>
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.margin}
              style={{ margin: 20 }}
              type="submit"
            >
              Send Request
            </Button>
          </div>
        </ValidatorForm>
      )}
      {submit && <User />}
    </>
  );
}
