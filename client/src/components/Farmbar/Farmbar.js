import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import FavoriteVendorsTable from '../FavoriteVendorsTable/FavoriteVendorsTable';
import About from '../About/About';
import Market from "../Market/Market";

  export default function Farmbar() {
    return (
      <Router>
        <div>
          <nav>
            <ul style={{textAlign:"right"}}>
              <li style={{ display:'inline-block', padding:".3em", borderRadius:".3em", border:" .09em inset #191919"}}>
                <Link style={{textDecoration:"none"}} to="/">Home</Link>
              </li>
              <li style={{ display:'inline-block', padding:".3em", borderRadius:".3em", border:" .09em inset #191919"}}>
                <Link style={{textDecoration:"none"}} to="/users">User Content</Link>
              </li>
              <li style={{ display:'inline-block', padding:".3em", borderRadius:".3em", border:" .09em inset #191919"}}>
                <Link style={{textDecoration:"none"}} to="/about">About Farm•gistic</Link>
              </li>
            </ul>
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
    <h2>UserContent depends on your authorization. </h2>
    <h3>Customer View:</h3>
    <Market />
        </>
    );
  }