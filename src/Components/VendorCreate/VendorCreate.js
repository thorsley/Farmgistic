import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './vendorcreate.css';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      color: theme.palette.text.secondary
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    card: {
        maxWidth: 275,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
      },
      button: {
        margin: theme.spacing.unit,
      },

  });

class Vendor extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                {/* search bar for markets  */}
            <input type="text" placeholder="Search.."></input>
            <button type="submit">Search button</button>
            <br/>
            <br/>
            <br/>




           <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>
            <Card className={classes.card}>
<CardContent>

                {/* Booth create form */}
            <h1>Create </h1>    
                <TextField Classname="inputs"
          id="filled-name"
          label="Farm Name"
          margin="normal"
          variant="filled"
        />
               <TextField
          id="filled-name"
          label="Address"
          margin="normal"
          variant="filled"
        />
               <TextField
          id="filled-name"
          label="Website"
          margin="normal"
          variant="filled"
        />
               <TextField
          id="filled-name"
          label="Bio"
          margin="normal"
          variant="filled"
        />
              <TextField
          id="filled-name"
          label="At Market"
          margin="normal"
          variant="filled"
        />
            <TextField
          id="filled-name"
          label="likes"
          margin="normal"
          variant="filled"
        />
          <TextField
          id="filled-name"
          label="position"
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-name"
          label="Markets"
          margin="normal"
          variant="filled"
        />
        <Button variant="contained" color="secondary" className={classes.button}>
        Add
      </Button>
        
        </CardContent>
        </Card>
        </Grid>
        </div>
        )
    }
    

}
Vendor.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles) (Vendor);