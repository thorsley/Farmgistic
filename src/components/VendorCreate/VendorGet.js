import React from 'react';
import { Container } from '@material-ui/core';
import SearchInput, {createFilter} from 'react-search-input'
import './vendorget.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#C9E3F2',
        color: '#656614'
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const styles = theme => ({
    root: {
      width: '50%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
     
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });


const KEYS_TO_FILTERS = ['id','marketName', 'address', 'size']

class  VendorGet extends React.Component {
    
    constructor(props) { 
        super(props);
        this.state = {
            data:[],
            searchTerm:'',
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }

  
     componentDidMount() {
        fetch('https://dcb-market-server.herokuapp.com/market',{
            method:'GET',
            headers:new Headers({ 
                'Content-Type': 'application/json',
                Authorization: localStorage.token
            })
        }).then((response)=>response.json())
        .then((findresponse)=>{
            this.setState({
                data:findresponse
               })
             console.log(findresponse)
             console.log(findresponse[0].marketName)
             console.log(findresponse[0].address)
             console.log(findresponse[0].size)
        }).catch(error => console.error('Error:', error))
}
    render() { 
        const filterdMarkets = this.state.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (  
            <div> 
                <Container >
                <h1
            style={{
              backgroundColor: "#C9E3EE",
              color: "#656614",
              padding: ".4em",
              margin: "0 .5em",
              borderRadius: ".1em",
            }}
          >
            Find your Farmers' Market:
          </h1>
            <SearchInput style={{borderRadius: '10px', marginTop:'5em'}}placeholder="search" className="search-input" onChange={this.searchUpdated}/>
            <br/>
            <Paper >
            <Table >
            <TableHead>
            <TableRow>
            <CustomTableCell align="right">Market Name</CustomTableCell>
            <CustomTableCell align="right">Address</CustomTableCell>
            <CustomTableCell align="right">Size</CustomTableCell>
            </TableRow>
            </TableHead>
        {filterdMarkets.map((findresponses,index)=>
        (
            <TableBody key={index}>
           <TableRow>
           <CustomTableCell align="right"> {findresponses.marketName}</CustomTableCell>
           <CustomTableCell align="right">{findresponses.address}</CustomTableCell>
           <CustomTableCell align="right">{findresponses.size}</CustomTableCell>
           </TableRow>
           </TableBody>
        
        ))}
       </Table>
        </Paper>
                </Container>
            
        </div>
        )
    }

    searchUpdated (term) {
        this.setState({searchTerm: term})}
}

VendorGet.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles) (VendorGet);