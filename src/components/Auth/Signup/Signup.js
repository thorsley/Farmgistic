import React, { Component } from "react";
//material ui imports
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      pasword: ""
    };
  }

  handleFirstName = e => {
    this.setState({ firstName: e.target.value });
  };
  handleLastName = e => {
    this.setState({ lastName: e.target.value });
  };
  handleEmail = e => {
    this.setState({ email: e.target.value });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3003/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(logData => {
        localStorage.setItem("token", logData.sessionToken);
        localStorage.setItem("userType", logData.user.userType);
        console.log(localStorage.token);
      })
      .catch(error => console.error("Error:", error));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleOpen}
        >
          Sign Up
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Sign up
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <TextField
                id="outlined-name"
                label="First Name"
                className={classes.textField}
                value={this.firstName}
                onChange={this.handleFirstName}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Last Name"
                value={this.lastName}
                onChange={this.handleLastName}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                value={this.email}
                onChange={this.handleEmail}
                type="email"
                name="email"
                autoComplete="off"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                value={this.password}
                onChange={this.handlePassword}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
