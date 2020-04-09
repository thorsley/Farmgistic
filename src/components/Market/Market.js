import React from 'react';

import SearchInput, {createFilter} from 'react-search-input'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper";
import PlotVendors from '../PlotVendors/PlotVendors';

const styles = theme => ({
    root: {
      margin: '0 auto',
      width: '69%',
      marginTop: theme.spacing.unit * 1,
      overflowX: 'auto',
    },
    table: {
      minWidth: 369,
    },
  });
      
  const KEYS_TO_FILTERS = ['id', 'marketName', 'address', 'size']

  class Market extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        marketTable: [],
        searchTerm: "",
        marketID: 0
      }
      this.searchUpdated = this.searchUpdated.bind(this)
    }
    componentWillMount() {
      fetch('http://localhost:3003/market/', {
          method: 'GET',
          headers: new Headers({
              'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTg1OTM0NTMzLCJleHAiOjE1ODYwMjA5MzN9.fTGciS6RJjEPHHC0zcuiHJqoYiJX4ixvEVlLUZ_7YJk"
              // 'Authorization': props.token
          })
      }).then ( (res) => res.json())
      .then ( json => {
        this.setState({
          marketTable: json
        })
        // console.log(json)
          console.log(this.state.marketTable)
      }).catch(error => console.error('Error:', error))
  }

    render() {
      const { classes } = this.props;
      
      const filteredMarkets = this.state.marketTable.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return(
          <div>
                <h2>Find your Farmers' Market:</h2>
                    <SearchInput className="search-input" onChange={this.searchUpdated} />
                <hr />
                <br />                
                <Paper className={classes.root}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Market Name</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Size</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredMarkets.map(market => {
                          return (
                              <TableRow key={market.id}>
                                <TableCell component="th" scope="row">{market.marketName}</TableCell>
                                <TableCell align="right">{market.address}</TableCell>
                                <TableCell align="right">{market.size}</TableCell>
                                <TableCell align="right"><button onClick={e => {this.setState({marketID: market.id})}}>View Map</button></TableCell>
                              </TableRow>
                      )})}
                    </TableBody>
                  </Table>
                </Paper>
                <h6>Select View Map to be directed to your Market!</h6>
                <hr />
                <br />
                          <p>Market ID: {this.state.marketID}</p>
                          <PlotVendors marketID={this.state.marketID} />
            </div>
        )
      }
      searchUpdated (term) {
        this.setState({searchTerm: term})}
}

Market.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default  withStyles(styles) (Market);