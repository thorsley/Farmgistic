import React from "react";
import Farmbar from "../Farmbar/Farmbar";

class Splash extends React.Component {
  render() {
    return (
      <div>
        {/* <p>Splash is sneaky and secretly holding everything displayed by the Navbar BrowserRouter</p> */}
        <Farmbar loggedIn={this.props.loggedIn} />
      </div>
    );
  }
}

export default Splash;
