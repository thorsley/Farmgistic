import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
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
        display: 'none',
      },
      
  });

class Login extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                >
              <h1>Login</h1>
            <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
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
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" color="primary" className={classes.button}>
         Login
        </Button>
        </Grid>
        </div>
        )
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles) (Login);