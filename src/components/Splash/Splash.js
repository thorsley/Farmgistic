import React from "react";
import Farmbar from "../Farmbar/Farmbar";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Farmbar loggedIn={this.props.loggedIn} />
      </div>
    );
  }
}

export default Splash;
