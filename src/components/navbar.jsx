import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("navbar rendered");
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="#" className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
