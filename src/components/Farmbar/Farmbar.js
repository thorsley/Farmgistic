import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FavoriteVendorsTable from "../FavoriteVendorsTable/FavoriteVendorsTable";
import About from "../About/About";
import Market from "../Market/Market";
import AdminContent from "../AdminContent/AdminContent";
import VendorCreate from "../VendorCreate/VendorCreate";
import VendorCreateDisplay from "../VendorCreate/VendorCreateDisplay/VendorCreateDisplay";
import Trevor from "./Trevor/Modal";
import ABModal from "./AB/Modal";
import QuizModal from "./Daniel/Modal";

class Farmbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      collapsed: true,
      collapseDropdown: true,
      loggedIn: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  toggleDropdown() {
    this.setState({
      collapseDropdown: !this.state.collapseDropdown,
    });
  }
  clearStorage() {
    localStorage.clear();

    // this.props.loggedIn(); // THIS WONT WORK ANYMORE BECAUESE THIS COMPONENT IS NO LONGER A FUNCTIONAL COMPONENT.
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    const collapseDropdown = this.state.collapseDropdown;
    const classThree = collapseDropdown
      ? "collapse nav-link dropdown-toggle"
      : "nav-link dropdown-toggle show";
    const classFour = collapseDropdown ? "dropdown-menu" : "dropdown-menu show";

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
            <div className="container">
              <a className="navbar-brand" href="#">
                Farm•gistic
              </a>
              <button
                onClick={this.toggleNavbar}
                className={`${classTwo}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className={`${classOne}`} id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users">
                      Customer
                    </Link>
                  </li>
                  {localStorage.userType === "Vendor" ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/vendor">
                        Vendor
                      </Link>
                    </li>
                  ) : localStorage.userType === "Admin" ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">
                        Admin
                      </Link>
                    </li>
                  ) : null}
                  <li className="nav-item dropdown">
                    <a
                      onClick={this.toggleDropdown}
                      className={`${classThree}`}
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Personal Nonsense
                    </a>
                    <div
                      className={`${classFour}`}
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item" to="/ab">
                        <ABModal />
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/trevor">
                        <Trevor />
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/daniel">
                        <QuizModal />
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <button
                      style={{ backgroundColor: "transparent" }}
                      onClick={this.clearStorage}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
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
            {/* <Route path="/ab"><ABModal /></Route> */}
            <Route path="/trevor">{/* <Trevor/> */}</Route>
            <Route path="/daniel">{/* <Daniel /> */}</Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div style={{margin: '1% 6%'}}>
      <FavoriteVendorsTable />
    </div>
  );
}

function Users() {
  return (
    <div style={{margin: '1% 6%'}}>
      <Market />
    </div>
  );
}

function Vendor() {
  return (
    <>
      <p>Search for Markets, create Booth, and Display your vendor card</p>
      <VendorCreate />
      <VendorCreateDisplay />
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

export default Farmbar;
