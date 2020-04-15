import React from 'react';
//material ui imports
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//material UI for radio buttons  
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import VendorCreateDisplay from "./VendorCreateDisplay/VendorCreateDisplay"

import VendorGet from './VendorGet'




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
        backgroundColor: "#656614",
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
      buttonroot: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing.unit * 3,
      },
      group: {
        margin: `${theme.spacing.unit}px 0`,
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
            atMarket:"",
            
        };
        this._handleRadio = this._handleRadio.bind(this);
        
    }
    _handleRadio(event) {
      const atMarket = event.currentTarget.value === 'true' ? true: false;
      console.log('handle',atMarket);
      this.setState({ atMarket });
    
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
        body: JSON.stringify( {farmName: this.state.farmName, address: this.state.address, URL: this.state.URL,bio: this.state.bio,}),
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: localStorage.token,
            
        })  
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        this.setState({
            farmName:this.state.marketName, 
            address:this.state.address, 
            URL:this.state.URL, 
            bio:this.state.bio,
            atMarket:this.state.atMarket
        })
    }).catch(err=>console.error('Error:',err))
    .then(response => console.log('Success:', response)); 
}
    render(){
      const {  atMarket } = this.state;
        const { classes } = this.props;
        return(
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: "repeat(5, 1fr)",
            gridColumnGap: "0",
            gridRowGap: "0"}}>

            <div style={{gridArea:" 1 / 1 / 3 / 3"}}>
          <VendorGet/>
          </div>
            <br/>
            <br/>
            <br/>
            <div style={{gridArea: "1 / 4 / 3 / 6"}}>
            <Card className={classes.card}>
        <CardContent>
            <h1  style={{
              backgroundColor: "#C9E3EE",
              color: "#656614",
              padding: ".4em",
              margin: "0 .5em",
              borderRadius: ".1em",
            }}>Vendor</h1>
        <form className={classes.container} onSubmit={this.handleSubmit}>
        <TextField
         type="text"
          label="Farm Name"
          className={classes.textField}
          value={this.farmName}
          margin="normal"
          onChange={this.handleFarmName}
          autoComplete="off"
        />

        <TextField
         type="text"
          label="Address"
          className={classes.textField}
          value={this.address}
          margin="normal"
          onChange={this.handleAddress}
          autoComplete="off"
        />

        <TextField
         type="text"
          label="URL"
          className={classes.textField}
          value={this.URL}
          margin="normal"
          onChange={this.handleUrl}
          autoComplete="off"
        />

            <TextField
         type="text"
          label="Bio"
          className={classes.textField}
          value={this.bio}
          margin="normal"
          onChange={this.handleBio}
          autoComplete="off"
        />

        {/* <RadioGroup
            aria-label="yes"
            name="yes"
            value={toString(this.state.atMarket)}
            onChange={this._handleRadio}
          >
          <FormControlLabel
              value="Yes"
              control={<Radio
                 color="primary"/>}
              label="yes"
              labelPlacement="start"
              value="true"
              checked={ atMarket === true}/>
          <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="no"
              labelPlacement="start"
              value="false"
              checked={ atMarket === false}/>
          </RadioGroup> */}
          <Button onClick={()=> window.location.reload(false)}  type="submit" variant="contained" style={{
                            borderRadius: ".3em",
                            color: "#656614",
                            backgroundColor: "#C9E3EE",

                          }} >
        Submit
      </Button>
       
      </form>
 
      </CardContent>
        </Card>
        <div/>
        
        <br/>
        <br/>
        <div style={{gridArea: " 4 / 2 / 6 / 6"}}>
        <VendorCreateDisplay />
        </div>
      
            </div>
            </div>
        )
    }
}

VendorCreate.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)  (VendorCreate);