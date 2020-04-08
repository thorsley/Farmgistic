import React, { Component } from "react";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "./auth.css";

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = (theme) => ({
  root: {
    height: 'fit',
    maxHeight: '50%',
    maxWidth: "83%",
    marginTop: theme.spacing.unit * 1,
    overflowX: "auto",
  },
  table: {

  },
  head: {
    backgroundColor: '#1A506B',
    color: '#E5ED9C'

  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
});




class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marketTable: []
    };

  }

  componentWillMount() {
    fetch('http://localhost:3003/market/', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg1ODQxMjY2LCJleHAiOjE1ODU5Mjc2NjZ9.gH4nO5LQOEMbbQ62dGYiQb-o2qZyHMbIPuP32lMugd4'
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
    return (
      <div>


        <Login loggedIn={this.props.loggedIn} />
        <Signup loggedIn={this.props.loggedIn} />

        <br />
        <br />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell className={classes.head}>Market:</CustomTableCell>
                  <CustomTableCell className={classes.head} align="right">Address:</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.marketTable.map(market => (
                  <TableRow className={classes.row} key={market.id}>
                    <CustomTableCell component="th" scope="row">
                      {market.marketName}
                    </CustomTableCell>
                    <CustomTableCell align="right">{market.address}</CustomTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </div>
    );
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);
