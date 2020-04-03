import React from "react";
import "./App.css";
import Splash from "./components/Splash/Splash";
import Auth from "./components/Auth/Auth";
// import VendorCreate from "./components/VendorCreate/VendorCreate";
//hello
const updateToken = newToken => {
  localStorage.setItem("token", newToken);
};
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {localStorage.token ? <Splash /> : <Auth />}
        {/* <Splash /> */}
        {/* <Auth /> */}
        {/* <VendorCreate /> */}
      </div>
    );
  }
}

export default App;
