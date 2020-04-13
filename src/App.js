import React from "react";
import "./App.css";
import DragnDrop from './components/dragndrop/DragnDrop'
import Splash from "./components/Splash/Splash";
import Auth from "./components/Auth/Auth";
import VendorCreate from "./components/VendorCreate/VendorCreate";

const updateToken = (newToken) => {
  localStorage.setItem("token", newToken);
};

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