import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";
import Project from "../Project";

export default function Works() {
  return (
    <section id="works" className="section">
      <h3 className="bg-heading-light">Works</h3>
      <div className="container">
        <h2 className="section-title section-title-light">
          <span>03. </span>Some Things I’ve Built
        </h2>

        <div className="row">
          <div className="col-lg-6">
            <Project />
          </div>
          <div className="col-lg-6">
            <Project />
          </div>
          <div className="col-lg-6">
            <Project />
          </div>
          <div className="col-lg-6">
            <Project />
          </div>
          <div className="col-lg-6">
            <Project />
          </div>
        </div>
      </div>
    </section>
  );
}
