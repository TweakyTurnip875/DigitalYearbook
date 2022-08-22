import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
 
//import About from '../pages/about'

const NavigationContainer = (props) => {
  return (
    <div className="navigation-container">
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-links-container">
            <div className="nav-link">
              <NavLink exact to="/">
                Home
              </NavLink>
            </div>
            
            <div className="nav-link">
              <NavLink to="/about">
                About
              </NavLink>
            </div>
            
            <div className="nav-link">
              <NavLink to="/contact">
                Contact
              </NavLink>
            </div>
            
            <div className="nav-link">
              <NavLink to="/yearbooks">
                Yearbooks
              </NavLink>
            </div>
          </div>
        </div>
  
        <div className="right-side">
          Launch High School
        </div>
      </div>
    </div>
  )
}

export default withRouter(NavigationContainer);