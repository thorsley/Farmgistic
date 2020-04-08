import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FavoriteVendorsTable from "../FavoriteVendorsTable/FavoriteVendorsTable";
import About from "../About/About";
import Market from "../Market/Market";
import AdminContent from "../AdminContent/AdminContent";

export default function Farmbar(props) {
  function clearStorage() {
    localStorage.clear();
    props.loggedIn();
  }
  //
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ textAlign: "right" }}>
            <li
              style={{
                display: "inline-block",
                padding: ".3em",
                borderRadius: ".3em",
                border: " .09em inset #191919",
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            </li>
            <li
              style={{
                display: "inline-block",
                padding: ".3em",
                borderRadius: ".3em",
                border: " .09em inset #191919",
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/users">
                Customer Content
              </Link>
            </li>
            <li
              style={{
                display: "inline-block",
                padding: ".3em",
                borderRadius: ".3em",
                border: " .09em inset #191919",
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/about">
                About Farm•gistic
              </Link>
            </li>
            <li
              style={{
                display: "inline-block",
                padding: ".3em",
                borderRadius: ".3em",
                border: " .09em inset #191919",
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/vendor">
                Vendor Content
              </Link>
            </li>
            <li
              style={{
                display: "inline-block",
                padding: ".3em",
                borderRadius: ".3em",
                border: " .09em inset #191919",
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/admin">
                Admin Content
              </Link>
            </li>
            <li
              style={{
                display: "inline-block",
                padding: ".3em",
                borderRadius: ".3em",
                border: " .09em inset #191919",
              }}
            >
              <button onClick={clearStorage}>Logout</button>
            </li>
          </ul>
        </nav>

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
  return <FavoriteVendorsTable />;
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
  );
}
