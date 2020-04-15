import React from "react";

import SearchInput, { createFilter } from "react-search-input";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PlotVendors from "../PlotVendors/PlotVendors";
import FavoriteVendorsTableDisplay from "../FavoriteVendorsTable/FavoriteVendorsTableDisplay";

const styles = (theme) => ({
  root: {
    margin: "0 auto",
    width: "89%",
    marginTop: theme.spacing.unit * 1,
    overflowX: "auto",
  },
  table: {
    minWidth: 369,
    backgroundColor: " #ECECEC",
    color: "#191919",
  },
});

const KEYS_TO_FILTERS = ["id", "marketName", "address", "size"];

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marketTable: [],
      searchTerm: "",
      marketID: 0,
      marketSize: "",
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }
  componentWillMount() {
    fetch("https://dcb-market-server.herokuapp.com/market/", {
      method: "GET",
      headers: new Headers({
        Authorization: localStorage.token,
        // 'Authorization': props.token
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          marketTable: json,
        });
      })
      .catch((error) => console.error("Error:", error));
  }

  render() {
    const { classes } = this.props;

    const filteredMarkets = this.state.marketTable.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "1fr",
          gridColumnGap: "0px",
          gridRowGap: "0px",
        }}
      >
        <br />
        <div style={{ gridArea: "1 / 4 / 2 / 7", marginRight: "3em" }}>
          <br />
          <br />
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
          <br />
          <br />
          <SearchInput
            style={{
              backgroundColor: "#ECECEC",
              border: ".2em inset #E5ED9C",
              borderRadius: ".3em",
            }}
            className="search-input"
            onChange={this.searchUpdated}
          />
          <br />
          <br />
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
                {filteredMarkets.map((market) => {
                  return (
                    <TableRow key={market.id}>
                      <TableCell component="th" scope="row">
                        {market.marketName}
                      </TableCell>
                      <TableCell align="right">{market.address}</TableCell>
                      <TableCell align="right">{market.size}</TableCell>
                      <TableCell align="right">
                        <button
                          style={{
                            borderRadius: ".3em",
                            color: "#C9E3EE",
                            backgroundColor: "#656614",
                          }}
                          onClick={(e) => {
                            this.setState({
                              marketID: market.id,
                              marketSize: market.size,
                            });
                          }}
                        >
                          View Map
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
          <h5 style={{ color: "#E5ED9C" }}>
            Select View Map to be directed to your Market!
          </h5>
          <hr style={{ width: "90%" }} />
          <br />
          <PlotVendors
            marketID={this.state.marketID}
            marketSize={this.state.marketSize}
          />
        </div>
        <div style={{ gridArea: "1 / 1 / 2 / 3" }}>
          <br />
          <br />
          <h1
            style={{
              backgroundColor: "#C9E3EE",
              color: "#656614",
              padding: ".4em",
              margin: "0 .5em",
              borderRadius: ".1em",
            }}
          >
            Your Booths
          </h1>
          <FavoriteVendorsTableDisplay />
        </div>
      </div>
    );
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
}

Market.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Market);
