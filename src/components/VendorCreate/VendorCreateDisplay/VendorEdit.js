import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
  input: {
    display: 'none',
   
  },
});

class VendorEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          farmName:"",
          address:"",
          URL:"",
          bio:"",
         }
    }
  handleFarmName = e => {
    e.preventDefault();
    this.setState({ farmName: e.target.value})

  }
  handleAddress = e => {
    e.preventDefault();
      this.setState({address: e.target.value})
  }
  handleUrl = e => {
    e.preventDefault();
      this.setState({ URL: e.target.value})
  }
  handleBio = e => {
    e.preventDefault();
      this.setState({ bio: e.target.value})
  }

    handleSubmit = (event)=> {
        event.preventDefault();
        
    fetch(`http://localhost:3003/booth/${this.props.id}`,{
        method: 'PUT',
        body: JSON.stringify( {id: event.target.id.value, farmName: this.state.farmName, address:  this.state.address, URL :this.state.URL,bio: this.state.bio}),
    
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: localStorage.token,
        })
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(this.props)
        this.setState({   
        })
    }).catch(err=>console.error('Error:',err))
    .then(response => console.log('Success:', response)); 
  
}   

    render() { 
      const { classes } = this.props;
            return ( 
                <div>
                <form onSubmit={this.handleSubmit}>
                
                  <Grid
  container
  direction="column"
  justify="center"
  alignItems="flex-start"
>
            <TextField
          label={this.props.id}
          margin="normal"
          disabled
        />
            <TextField
          label={this.props.Name}
          margin="normal"
          onChange={this.handleFarmName}
        />         
               <TextField
          label={this.props.farmAddress}
          margin="normal"
          onChange={this.handleAddress}
        />              
               <TextField
          label={this.props.farmURL}
          margin="normal"
          onChange={this.handleUrl}
        />
               <TextField
          label={this.props.farmBio}
          margin="normal"
          onChange={this.handleBio}
        />
        <br/>
        
        <Button onClick={()=> window.location.reload(false)} style={{borderRadius: ".3em",color: "#C9E3EE",backgroundColor: "#656614",}} type="submit" variant="contained" >Update</Button>
               </Grid>
                </form>
                
        </div>
         )
   }
}
 
VendorEdit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (VendorEdit);