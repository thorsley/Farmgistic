import React, { Component } from './node_modules/react';
//material ui imports
import PropTypes from './node_modules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import TextField from './node_modules/@material-ui/core/TextField';
import Button from './node_modules/@material-ui/core/Button';
import Modal from './node_modules/@material-ui/core/Modal';
import Typography from './node_modules/@material-ui/core/Typography';




function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
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
      paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
      },
  });

class Signup extends Component{
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

    
    render(){
        const { classes } = this.props;
        return(

<div>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleOpen}>Sign Up</Button>
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
                 <TextField
          id="outlined-name"
          label="First Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
            <TextField
          id="outlined-name"
          label="Last Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
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
         <br/>
         <Button variant="contained" color="primary" className={classes.button}>
        Sign Up
        </Button> 
           
          </div>
        </Modal>
</div>
        )
    }
}
Signup.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles) (Signup);