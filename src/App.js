import React from 'react';
import './App.css';
 import Splash from './Components/Splash/Splash';
 import Auth from './Components/Auth/Auth';
// import Vendor from './Components/VendorCreate/VendorCreate'

class App extends React.Component {
  render(){
  return (
    <div className="App">
     <Splash />  
       <Auth />  
      {/* <Vendor/> */}
    </div>
  )};
}

export default App;
