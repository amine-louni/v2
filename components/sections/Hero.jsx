import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="hero">
      <div className={`container`}>
        <div className={`row  `}>
          <div className={`col-lg-11  main-col `}>
            <div>
              <h4
                className={"hello "}
                data-aos-duration={1000}
                data-aos="fade-up"
                data-aos-delay={1500}
              >
                <span>{">"}</span> Hello world, my name is
              </h4>
              <h4
                className={"title"}
                data-aos-duration={1000}
                data-aos="fade-up"
                data-aos-delay={1700}
              >
                Amine Louni.
              </h4>
              <h4
                className={"sub-title"}
                data-aos-duration={1000}
                data-aos="fade-up"
                data-aos-delay={1700}
              >
                I build things for the web.
              </h4>
              <p
                className={"text"}
                data-aos-duration={1000}
                data-aos="fade-up"
                data-aos-delay={1800}
              >
                I’m a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building mobile corss platform
                applications at Goldencorp .
              </p>
              <Link
                activeClass="active"
                to={"works"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button
                  className="btn  "
                  data-aos-duration={1000}
                  data-aos="fade-up"
                  data-aos-delay={1700}
                >
                  <span className="btn__text">Check out my works!</span>{" "}
                </button>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
