import React, { useState } from "react";
import classes from "../styles/Navbar.module.scss";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={open ? classes["humburger-open"] : classes.humburger}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
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

            <li>
              <button className="btn btn-sm">Resume</button>
            </li>
          </ul>
        </div>
      </nav>
      <aside className={`${classes.aside} ${open && classes["aside-open"]}`}>
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

          <li>
            <button className="btn btn-sm">Resume</button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
