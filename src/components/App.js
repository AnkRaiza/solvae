import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import FuelSavingsPage from "./containers/FuelSavingsPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import logo from '../assets/images/LOGO_SOLVAE.png';
import intranetIcon from '../assets/images/INTRANET_ICON.png';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand col-1 offset-2" href="#"><img src={logo} /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse col-6" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 row">
                  <li className="nav-item col">
                    <NavLink exact to="/" activeClassName="active">INICIO</NavLink>
                  </li>
                  <li className="nav-item col dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                      PRODUCTOS Y SERVICIOS</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink exact to="/" activeClassName="active">PARA MI HOGAR</NavLink></li>
                      <li><NavLink exact to="/" activeClassName="active">PARA MI EMPRESA</NavLink></li>
                      <li><NavLink exact to="/" activeClassName="active">MANTENIMIENTO Y REPARACION</NavLink></li>
                    </ul>
                  </li>
                  <li className="nav-item col">
                    <NavLink to="/about" activeClassName="active">SOBRE NOSOTROS</NavLink>
                  </li>
                  <li className="nav-item col">
                    <NavLink to="/contactenos" activeClassName="active">CONTACTENOS</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col">
                <a className="btn btn-primary shadow-none" role="button" target="_blank" rel="noopener noreferrer" href="https://google.com">
                  <img src={intranetIcon} alt="Intranet" width="18" height="12" title="intranet" />.intranet
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/fuel-savings" component={FuelSavingsPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <div>
          <nav className="navbar navbar-light bg-light">

          </nav>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
