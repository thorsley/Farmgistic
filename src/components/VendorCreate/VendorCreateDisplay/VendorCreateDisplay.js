import React from 'react';
// import {  Table } from 'reactstrap';
import VendorEdit from './VendorEdit' 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

//table imports
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import blue from '@material-ui/core/colors/blue';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const primary = blue[800];
// modal function
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
//table styling
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#C9E3F2',
    color: '#656614'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);




//modal styles
const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  // table styles
  root: {
    width: '90%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
  },
});
class VendorDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            modal: false,
            activeItemName:'',
            activeItemId: null,
            activeItemaddress:'',
            activeItemurl:'',
            activeItembio:'',
            activeItematMarket:null,
            open: false
            
        }
    }
    handleOpen = (booths) => {
      this.setState({ open: true,activeItemName: booths.farmName,
            activeItemId: booths.id,
            activeItemaddress:booths.address,
            activeItemurl:booths.URL,
            activeItembio:booths.bio,
            activeItematMarket:booths.atMarket
           });
    };
    handleClose = () => {
      this.setState({ open: false });
    };
    componentDidMount() {
        fetch('http://localhost:3003/booth',{
          method:'GET',
          headers:new Headers({ 
            'Content-Type': 'application/json',
             Authorization: localStorage.token
          })
        }).then((res)=>res.json())
        .then((booth)=>{
          this.setState({
            data:booth
          })
          console.log(booth)
          console.log(booth[6].atMarket)
          console.log(this.state.data)
        }).catch(error => console.error('Error:', error))
    }
    deleteVendor=(booths)=>{
      fetch(`http://localhost:3003/booth/${booths.id}`,{
        method:'DELETE',
        headers:new Headers({ 
          'Content-Type': 'application/json',
          Authorization: localStorage.token,
        })
      })
    }
  render() {
    const { classes } = this.props;
    return ( 
      <div>
        
        <Paper className={classes.root}>
        <Table>
        <TableHead>
        <TableRow>
        <CustomTableCell>#</CustomTableCell>
          <CustomTableCell>Farm Name</CustomTableCell>
          <CustomTableCell>Address</CustomTableCell>
          <CustomTableCell>URL</CustomTableCell>
          <CustomTableCell>Bio</CustomTableCell>
          <CustomTableCell></CustomTableCell> 
          </TableRow>
        </TableHead>
     
       {this.state.data.map((booths,index)=>
          (
            <TableBody key={index}>
          <TableRow>
          <CustomTableCell align="right">{booths.id}</CustomTableCell>
             <CustomTableCell align="right">{booths.farmName}</CustomTableCell>
             <CustomTableCell align="right">{booths.address}</CustomTableCell>
             <CustomTableCell align="right">{booths.URL}</CustomTableCell>
             <CustomTableCell align="right">{booths.bio}</CustomTableCell>
             {/* <CustomTableCell align="right">{booths.atMarket}</CustomTableCell>  */}
             {/* maps over information and passes the active info to the edit */}
              <CustomTableCell><Tooltip title="Edit"><IconButton aria-label="Edit" onClick={()=>this.handleOpen(booths)} variant="contained" color="primary" className={classes.button}>
             <EditIcon className={classes.icon} />
      </IconButton></Tooltip>

      {/* delete button */}
      <Tooltip title="Delete"><IconButton aria-label="delete"  onClick={ ()=> {this.deleteVendor(booths)}}variant="contained" color="primary" className={classes.button}>
      <DeleteOutlinedIcon  onClick={()=> window.location.reload(false)} />
        </IconButton ></Tooltip>
        </CustomTableCell>
      </TableRow>
             </TableBody>
          ))} 
      </Table>
      </Paper>


       <div>
        <Modal
         farmURL={this.state.activeItemurl}
         farmAddress={this.state.activeItemaddress} itemId={this.state.activeItemId}
         farmBio={this.state.activeItembio}
         farmatMarket={this.state.activeItematMarket}
               itemName={this.state.activeItemName} isOpen={this.state.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Edit Vendor
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
            <VendorEdit id={this.state.activeItemId} Name={this.state.activeItemName} farmAddress={this.state.activeItemaddress}
          farmURL={this.state.activeItemurl}
          farmBio={this.state.activeItembio}
          farmatMarket={this.state.activeItematMarket}
          /> 
            </Typography>
          </div>
        </Modal>
        </div>
      </div>
     );
  }
}
VendorDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};
 

  export default withStyles(styles) (VendorDisplay);