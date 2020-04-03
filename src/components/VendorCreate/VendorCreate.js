import React from 'react';
//material ui imports
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import lightGreen from '@material-ui/core/colors/lightGreen';


import VendorGet from './VendorGet'


const primary = lightGreen[300]

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing.unit,
      },
    card: {
        maxWidth: 275,
        backgroundColor: primary,
        color: theme.palette.primary.contrastText
      },
      root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
      },
  });
  


class VendorCreate extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            farmName:"", 
            address:"", 
            URL:"", 
            bio:"", 
            

        };
    }
    handleFarmName = e => {
        this.setState({ farmName: e.target.value})

    }
    handleAddress = e => {
        this.setState({address: e.target.value})
    }
    handleUrl = e => {
        this.setState({ URL: e.target.value})
    }
    handleBio = e => {
        this.setState({ bio: e.target.value})
    }
    
    handleSubmit = (event)=> {
        event.preventDefault();
        fetch('http://localhost:3003/booth/add', {
        method: 'POST',
        body: JSON.stringify( {farmName: this.state.farmName, address: this.state.address, URL: this.state.URL,bio: this.state.bio}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg1ODM3ODE1LCJleHAiOjE1ODU5MjQyMTV9.IpNDAbPE8ekqe8sXgDUjkZtzH4O-rE9agb2uc-IBnxM'
            // 'Authorization': props.token
        })  
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        this.setState({
            farmName:this.state.marketName, 
            address:this.state.address, 
            URL:this.state.URL, 
            bio:this.state.bio
        })
    }).catch(err=>console.error('Error:',err))
    .then(response => console.log('Success:', response)); 
}
    render(){
  
        const { classes } = this.props;
        return(
            <>
          <div>
            <VendorGet/>
          </div>
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
            <h1>Vendor</h1>
        <form className={classes.container} onSubmit={this.handleSubmit}>
        <TextField
         type="text"
          label="Farm Name"
          className={classes.textField}
          value={this.farmName}
          margin="normal"
          onChange={this.handleFarmName}
        />

        <TextField
         type="text"
          label="Address"
          className={classes.textField}
          value={this.address}
          margin="normal"
          onChange={this.handleAddress}
        />

        <TextField
         type="text"
          label="URL"
          className={classes.textField}
          value={this.URL}
          margin="normal"
          onChange={this.handleUrl}
        />

            <TextField
         type="text"
          label="Bio"
          className={classes.textField}
          value={this.bio}
          margin="normal"
          onChange={this.handleBio}
        />
        
        <Button  type="submit" variant="contained" color="primary" >
        Submit
      </Button>
      </form>

      </CardContent>
        </Card>
        </Grid>
            </>
        )
    }
}

VendorCreate.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)  (VendorCreate);