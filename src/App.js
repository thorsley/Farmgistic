import React from "react";
import "./App.css";
import Splash from "./components/Splash/Splash";
import Auth from "./components/Auth/Auth";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Splash /> */}
        <Auth />
      </div>
    );
  }
}

export default App;
