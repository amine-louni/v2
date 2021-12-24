import Image from "next/image";
import classes from "../../styles/Home.module.scss";
import squareBlue from "./../../public/square-blue.svg";
import zigZagBlue from "./../../public/zigzag-blue.svg";
import circlesagBlue from "./../../public/circles-blue.svg";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";

export default function Contact() {
  return (
    <section className={classes.section}>
      <div className="container">
        <div className="title-center">
          <h4 className="title-center__intro">
            <span>04. </span>Contact
          </h4>
          <h2 className="title-center__main">
            <span>04. </span>Get In Touch
          </h2>
        </div>
      </div>
    </section>
  );
}
