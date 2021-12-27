import React from "react";
import { Link } from "react-scroll";
import classes from "../styles/Navbar.module.scss";
const Navbar = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={`${classes.humburger} ${open && classes["humburger-open"]}`}
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
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span>01.</span> about
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="jobs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span>02.</span> experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span>03.</span> works
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span>04.</span> contact
              </Link>
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
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>01.</span> about
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="jobs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>02.</span> experience
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>03.</span> works
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>04.</span> contact
            </Link>
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
