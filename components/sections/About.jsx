import Image from "next/image";
import circlesagBlue from "./../../public/circles-blue.svg";
import Me from "../../public/me.jpg";
import AvatarShapes from "../../public/photo-bg.svg";

export default function About() {
  return (
    <section className="section" id="about">
      <h3 className="bg-heading-light">About</h3>
      <div className="container">
        <h2 className={"section-title section-title-light"}>
          <span>01. </span>About Me
        </h2>

        <div className="row">
          <div data-aos="fade-in" className="col-lg-6 mb-lg ">
            <p>
              I solve clients problems using digital solutions , Another reason
              a software engineering career is a great choice for me because the
              field is so broad and encompasses a variety of roles related to
              both computer applications and systems.
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </p>
            <ul className="skillsList">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>TypeScript</li>
              <li>React native</li>
            </ul>

            <figure className="form-2">
              <Image src={circlesagBlue} alt="zig zag" />
            </figure>
          </div>

          <div data-aos="fade-in" data-aos-delay={100} className={"col-lg-6"}>
            <div className="avatar-wrapper">
              <figure className="shapes">
                <Image src={AvatarShapes} alt="shapes" />
              </figure>
              <div className="img-container">
                <Image
                  className={"photo "}
                  height={300}
                  width={280}
                  src={Me}
                  alt="amint louni"
                />
                <div className="img-container__overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
