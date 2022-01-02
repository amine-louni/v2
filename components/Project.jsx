import React from "react";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Project({ link, githubLink, name, stack, description }) {
  return (
    <div className="project">
      <div className="project__content">
        <div className="project__cta">
          <FiFolder size={45} className="project__icon" />
          <div>
            {link && (
              <a
                target={"_blank"}
                href={link}
                className="project__link"
                rel="noreferrer"
              >
                <FiExternalLink />
              </a>
            )}
            {githubLink && (
              <a
                target={"_blank"}
                href={githubLink}
                className="project__link"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
            )}
          </div>
        </div>
        <h3 className="project__title">{name}.</h3>
        <div className="project__skills">
          {stack.map((oneStack) => (
            <div className="project__skills__tag" key={oneStack}>
              {oneStack}
            </div>
          ))}
        </div>

        <p className="project__description">
          {documentToReactComponents(description)}
        </p>
      </div>
    </div>
  );
}

export default Project;
