import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";
import Project from "../Project";

export default function Works({ projectsData }) {
  console.log(projectsData);
  return (
    <section id="works" className="section">
      <h3 className="bg-heading-light">Works</h3>
      <div className="container">
        <h2 className="section-title section-title-light">
          <span>03. </span>Some Things I’ve Built
        </h2>

        <div className="row">
          {projectsData.map((oneProject) => (
            <div key={oneProject.name} className="col-lg-6">
              <Project
                stack={oneProject.fields.stack}
                name={oneProject.fields.name}
                githubLink={oneProject.fields.gihtubLink}
                link={oneProject.fields.link}
                description={oneProject.fields.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
