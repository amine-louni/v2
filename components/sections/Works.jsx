import Image from "next/image";
import classes from "../../styles/Home.module.scss";
import squareBlue from "./../../public/square-blue.svg";
import zigZagBlue from "./../../public/zigzag-blue.svg";
import circlesagBlue from "./../../public/circles-blue.svg";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";

export default function Works() {
  return (
    <section className={classes.section}>
      <h3 className={classes["bg-heading"]}>Works</h3>
      <div className="container">
        <h2
          className={`${classes["section-title"]} ${classes["section-title-dark"]}`}
        >
          <span>03. </span>Some Things I’ve Built
        </h2>

        <div className="row">
          <div className="col-lg-6">
            <div className="project">
              <div className="project__content">
                <div className="project__cta">
                  <FiFolder size={45} />
                  <div>
                    <a href="#" className="project__link">
                      <FiExternalLink />
                    </a>
                    <a href="#" className="project__link">
                      <FiGithub />
                    </a>
                  </div>
                </div>
                <h3 className="project__title">Lorem, ipsum dolor.</h3>
                <div className="project__skills">
                  <div className="project__skills__tag">Node.js</div>
                  <div className="project__skills__tag">React</div>
                  <div className="project__skills__tag">REST API</div>
                  <div className="project__skills__tag">Postgres</div>
                </div>

                <p className="project__description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  itaque enim dolorum, deserunt doloribus dolor nulla
                  exercitationem perferendis.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="project">
              <div className="project__content">
                <div className="project__cta">
                  <FiFolder size={45} />
                  <div>
                    <a href="#" className="project__link">
                      <FiExternalLink />
                    </a>
                    <a href="#" className="project__link">
                      <FiGithub />
                    </a>
                  </div>
                </div>
                <h3 className="project__title">Lorem, ipsum dolor.</h3>
                <div className="project__skills">
                  <div className="project__skills__tag">Node.js</div>
                  <div className="project__skills__tag">React</div>
                  <div className="project__skills__tag">REST API</div>
                  <div className="project__skills__tag">Postgres</div>
                </div>

                <p className="project__description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  itaque enim dolorum, deserunt doloribus dolor nulla
                  exercitationem perferendis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project">
              <div className="project__content">
                <div className="project__cta">
                  <FiFolder size={45} />
                  <div>
                    <a href="#" className="project__link">
                      <FiExternalLink />
                    </a>
                    <a href="#" className="project__link">
                      <FiGithub />
                    </a>
                  </div>
                </div>
                <h3 className="project__title">Lorem, ipsum dolor.</h3>
                <div className="project__skills">
                  <div className="project__skills__tag">Node.js</div>
                  <div className="project__skills__tag">React</div>
                  <div className="project__skills__tag">REST API</div>
                  <div className="project__skills__tag">Postgres</div>
                </div>

                <p className="project__description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  itaque enim dolorum, deserunt doloribus dolor nulla
                  exercitationem perferendis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
