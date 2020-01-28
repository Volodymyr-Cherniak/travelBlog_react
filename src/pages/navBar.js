import React from "react";

export const NavBar = () => {
  return (
    <nav style={{width: '100%'}}>
      <div className="nav-wrapper brown lighten-2" style={{}}>
        <a href="/home" className="brand-logo" style={styles}>Home</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/trips">My Trips</a></li>
          <li><a href="/contact">Contacts</a></li>
          <li><a href="/about">About us</a></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  marginLeft: '10px',
}
