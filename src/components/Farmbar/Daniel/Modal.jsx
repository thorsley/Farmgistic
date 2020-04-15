import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Quiz from "./Quiz";

const styles = (theme) => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
  },
});

class QuizModal extends Component {
  state = { open: false };
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
        <Button onClick={this.handleOpen}>Daniel</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              <h1>Random Jeopardy question</h1>
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {" "}
              <Quiz />
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}
QuizModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuizModal);
