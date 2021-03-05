import React, { Component, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const [ico, setIco] = useState(false);  
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  
  return (
    <div className="sidebar">
      
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img
                src={require("assets/img/faces/face-2.jpg").default}
                alt="..."
              />
            </div>
          </a>
          <p className="simple-text-se">
            Thyago Pereira
          </p>
          
        </div>
        <Nav>
          {routes.map((prop, key) => {
            
            if (!prop.redirect)
              return (
                
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={location.pathname.indexOf(prop.layout + prop.path) > -1 ? prop.icon : ""} />
                    <p>{prop.name}</p>
                   
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
