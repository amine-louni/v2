import React from "react";
import classes from "../styles/Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={classes.root}>
      <div className={`container ${classes.container}`}>
        <h4>Amine Louni</h4>
        <ul>
          <li>
            <span>01.</span> about
          </li>
          <li>
            <span>02.</span> work
          </li>
          <li>
            <span>03.</span> experience
          </li>
          <li>
            <span>04.</span> contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
