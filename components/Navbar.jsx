import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import logo from "../public/logo.svg";

const links = [
  {
    title: "about",
    url: "about",
  },
  {
    title: "jobs",
    url: "jobs",
  },
  {
    title: "works",
    url: "works",
  },
  {
    title: "contact",
    url: "contact",
  },
];

const Navbar = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={`humburger ${open && "humburger-open"}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="root">
        <div className="container">
          <h4 data-aos="fade-in" data-aos-delay={100}>
            Amine Louni
          </h4>
          <ul>
            {links.map((link, index) => (
              <li
                data-aos-duration={700}
                data-aos="fade-down"
                data-aos-delay={150 * index}
                key={link.title}
              >
                <Link
                  activeClass="active"
                  to={link.url}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>0{index + 1}.</span> {link.title}
                </Link>
              </li>
            ))}

            <li
              data-aos-duration={700}
              data-aos="fade-down"
              data-aos-delay={600}
            >
              <a target="_blank" className="btn btn-sm" href="/resume.pdf">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <aside className={`aside ${open && "aside-open"}`}>
        <ul>
          {links.map((link, index) => (
            <li key={link.title}>
              <Link
                onClick={() => setOpen(false)}
                activeClass="active"
                to={link.url}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span>0{index + 1}.</span> {link.title}
              </Link>
            </li>
          ))}
          <li>
            <a target="_blank" className="btn btn-sm" href="/resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
