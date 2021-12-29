import React from "react";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";

function Project() {
  return (
    <div className="project">
      <div className="project__content">
        <div className="project__cta">
          <FiFolder size={45} className="project__icon" />
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio itaque
          enim dolorum, deserunt doloribus dolor nulla exercitationem
          perferendis.
        </p>
      </div>
    </div>
  );
}

export default Project;
