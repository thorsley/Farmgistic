import React from "react";
import "./App.css";
//  import Splash from "./components/Splash/Splash";
// import Auth from './components/Auth/Auth';
import VendorCreate from './components/VendorCreate/VendorCreate'
//hello
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Splash /> */}
        {/* <Auth />  */}
        <VendorCreate/> 
      </div>
    );
  }
}

export default App;
