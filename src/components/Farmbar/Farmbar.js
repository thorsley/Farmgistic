import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import FavoriteVendorsTable from '../FavoriteVendorsTable/FavoriteVendorsTable';
import About from '../About/About';
import Market from "../Market/Market";
import AdminContent from "../AdminContent/AdminContent";

  export default function Farmbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
      <Router>
        <div>
          <nav style={{backgroundColor: "#656614", marginTop: '0em'}}>
            <h2 style={{marginRight: '44%', color:"#C9E3EE", textAlign:"left!", display:'inline-block'}}>FARM•GISTIC</h2>
            <Button 
            style={{color: '#C9E3EE', }}
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
            >
              Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link style={{textDecoration:"none", color:'#656614'}} to="/">Home</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link style={{textDecoration:"none", color:'#656614'}} to="/users">Customer Content</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link style={{textDecoration:"none", color:'#656614'}} to="/vendor">Vendor Content</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link style={{textDecoration:"none", color:'#656614'}} to="/admin">Admin Content</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link style={{textDecoration:"none", color:'#656614'}} to="/about">About Farm•gistic</Link></MenuItem>
              <MenuItem onClick={handleClose} style={{color:'#656614'}}>Logout</MenuItem>
            </Menu>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/vendor">
              <Vendor />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Home() {
    return <FavoriteVendorsTable />
    ;
  }
  
  
  function Users() {
    return (
        <>
        {/* <h2>UserContent depends on your authorization. </h2>
        <h3>Customer View:</h3> */}
        <Market />
        </>
    );
  }

  function Vendor() {
    return (
      <>
      <p>Search for Markets, create Booth, and Display your vendor card</p>
      </>
    );
  }

  function Admin() {
    return (
      <>
      <AdminContent />
      </>
    )
  }