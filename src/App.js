import React from "react";
import "./App.css";
import Splash from "./components/Splash/Splash";
import DragnDrop from "./components/dragndrop/DragnDrop";
import Auth from "./components/Auth/Auth";
import VendorCreate from "./components/VendorCreate/VendorCreate";
import VendorDisplay from "./components/VendorCreate/VendorCreateDisplay/VendorCreateDisplay";
import VendorCreateDisplay from "./components/VendorCreate/VendorCreateDisplay/VendorCreateDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    };
  }
  changeLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };
  render() {
    return (
      <div className="App">
        {localStorage.token ? (
          <Splash loggedIn={this.changeLogin} />
        ) : (
          <Auth loggedIn={this.changeLogin} />
        )}
        {/* <DragnDrop/> */}
      </div>
    );
  }
}

export default App;
