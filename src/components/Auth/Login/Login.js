import React, { Component } from "react";
import logo from "../../Assets/FarmGistic logo2.png"
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pasword: "",
    };
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://dcb-market-server.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        localStorage.setItem("token", logData.sessionToken);
        localStorage.setItem("userType", logData.user.userType);
        this.props.loggedIn();
      })
      .catch((error) => console.error("Error:", error));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <div style={{backgroundColor:"#E5ED9C", borderRadius:"20%", marginTop:"20px", border: "solid 3px #C9E3EE", color: '#656614'}}>
        <img  src={logo} alt="Logo" />
           <h1>Farmgistic</h1> 
           </div>
          <form onSubmit={this.handleSubmit}>
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
            <br />
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
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              style={{
                borderRadius: ".3em",
                color: "#C9E3EE",
                backgroundColor: "#656614",

              }}
            >
              Login
            </Button>
          </form>
        </Grid>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
