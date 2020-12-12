import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function LoginModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    <div>
      <Button
      variant="contained"
      color="primary"
      onClick={handleClickOpen}
      size="large"
      style={{position: "absolute",top:20,right:20,zIndex:100}}
      >
        LOGIN
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
        <div className={classes.root}>
            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="LOGIN" {...a11yProps(0)} />
                <Tab label="SIGN UP" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
            <DialogContentText>
              <h4>Enter your details</h4>
            </DialogContentText>
            <TextField
              autoFocus fullWidth variant="outlined"
              margin="dense"
              id="name"
              label="Email Address"
              type="email"

            />
            <TextField
              autoFocus fullWidth variant="outlined"
              margin="dense"
              id="name"
              label="Password"
              type="password"

            />
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color="primary">
                Login
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <DialogContentText>
              <h4>Enter your details</h4>
            </DialogContentText>
            <TextField
              autoFocus fullWidth variant="outlined"
              margin="dense"
              id="name"
              label="Name"
              type="text"

            />
            <TextField
              autoFocus fullWidth variant="outlined"
              margin="dense"
              id="name"
              label="Email Address"
              type="email"

            />
            <TextField
              autoFocus fullWidth variant="outlined"
              margin="dense"
              id="name"
              label="Phone Number"
              type="text"

            />
            <TextField
              autoFocus fullWidth variant="outlined"
              margin="dense"
              id="name"
              label="Password"
              type="password"

            />
            <TextField
              autoFocus fullWidth variant="outlined"
              margin="dense"
              id="name"
              label="Reenter Password"
              type="password"

            />
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color="primary">
                Sign Up
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
            </TabPanel>
          </div>
        </DialogContent>

      </Dialog>
    </div>
  );
}
