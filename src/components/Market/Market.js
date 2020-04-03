import React from 'react';
// import MarketDisplay from './MarketDisplay/MarketDisplay';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '50%',
      marginTop: theme.spacing.unit * 1,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });
  
  let id = 0;
  function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

class Market extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <div>
                <h2>Search for your Farmers' Market:</h2>
                <input placeholder="ex: Growing Places Winter Market"/>
                <button>Search</button>
                <hr />
                <h2>List of results</h2>
                {/* <MarketDisplay /> */}
                <button>Select Market and View Map</button>
                <br />
                <hr />
                <br />
                {/* <table>
                    <tr>
                        <th>♥︎</th>
                        <th>Farm Name</th>
                        <th>Associated Market</th>
                        <th>Link</th>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Young Valley</td>
                        <td>Toronto</td>
                        <td>www.youngvalleyfarms.com</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Old Hills</td>
                        <td>Utah City</td>
                        <td>www.oldhillsfarm.com</td>
                    </tr>
                </table> */}
                <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
            </div>
        )
    }
}

Market.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default  withStyles(styles) (Market);