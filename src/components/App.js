import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import HomeProducts from "./HomeProducts";
import BusinessProducts from "./BusinessProducts";
import ContactPage from "./Contact";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import logo from '../assets/images/LOGO_SOLVAE.png';
import intranetIcon from '../assets/images/INTRANET_ICON.png';
import iconFB from '../assets/images/ICON_FB.png';
import iconIG from '../assets/images/ICON_IG.png';
import iconIN from '../assets/images/ICON_IN.png';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light topbar">
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
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" data-hover="dropdown" aria-expanded="false">
                      PRODUCTOS Y SERVICIOS</a>
                    <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink exact to="/home" activeClassName="active">Para mi hogar</NavLink>
                        <ul>
                          <li><NavLink exact to="/" activeClassName="active">Silla salvaescalera</NavLink></li>
                          <li><NavLink exact to="/" activeClassName="active">Plataforma salvaescalera</NavLink></li>
                          <li><NavLink exact to="/" activeClassName="active">Montaescaleras</NavLink></li>
                          <li><NavLink exact to="/" activeClassName="active">Elevador para el hogar</NavLink></li>
                        </ul>
                      </li>
                      <li>
                        <NavLink exact to="/business" activeClassName="active">Para mi empresa</NavLink>
                        <ul>
                          <li><NavLink exact to="/" activeClassName="active">Ascensores</NavLink></li>
                          <li><NavLink exact to="/" activeClassName="active">Escaleras mecánicas y rampas móviles</NavLink></li>
                          <li><NavLink exact to="/" activeClassName="active">Duplicadores de estacionamiento</NavLink></li>
                          <li><NavLink exact to="/" activeClassName="active">Accesibilidad</NavLink></li>
                        </ul>
                      </li>
                      <li><NavLink exact to="/" activeClassName="active">Mantenimiento y reparacion</NavLink></li>
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
            <Route exact path="/home" component={HomeProducts} />
            <Route exact path="/business" component={BusinessProducts} />
            <Route exact path="/contactenos" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <div className="row footer">
          <div className="col-4 offset-4 links">
            <NavLink to="/" activeClassName="active">INICIO</NavLink>
            <NavLink to="/home" activeClassName="active">PRODUCTOS Y SERVICIOS</NavLink>
            <NavLink to="/about" activeClassName="active">SOBRE NOSOTROS</NavLink>
            <NavLink to="/contactenos" activeClassName="active">CONTÁCTENOS</NavLink>
          </div>
          <div className="col-2 offset-5 text-center address">Av. Tacna 543 of. 701 - Lima<br /> (+01) 439-9037<br /> ventas@solvae.pe</div>
          <div className="col-4 offset-4 social_networks">
            <img src={iconFB} alt="facebook icon" />
            <img src={iconIG} alt="instragram icon" />
            <img src={iconIN} alt="linkedin icon" />
          </div>
          <div className="col-2 offset-5 text-center copyright"><span>© 2020 Solvae.</span> <span>Todos los derechos reservados</span></div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
