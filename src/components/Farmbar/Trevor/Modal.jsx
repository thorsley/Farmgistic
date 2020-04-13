import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Trevor from "./Trevor"

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
  
  const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
    },
  });


class TacoApiModal extends Component {
    state = { open: false, }
    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    render() { 
        const { classes } = this.props;
        return ( 

            <div>
            <Button onClick={this.handleOpen}>Trevor</Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <Typography variant="h6" id="modal-title">
                  <h1>Heres a random Taco</h1>
                </Typography>
                <Typography variant="subtitle1" id="simple-modal-description"> <Trevor/></Typography>
              </div>
            </Modal>
          </div>
            
         );
    }
}
TacoApiModal .propTypes = {
    classes: PropTypes.object.isRequired,
  };
 
export default  withStyles(styles) (TacoApiModal ) ;