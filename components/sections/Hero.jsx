import Image from "next/image";
import { Link } from "react-scroll";
import AvatarShapes from "../../public/photo-bg.svg";
import Me from "../../public/me.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="overlay "
        data-aos-duration={1000}
        data-aos="fade-down"
        data-aos-delay={1000}
      />
      <div className={`container`}>
        <div className={`row  `}>
          <div className={`col-lg-7  main-col `}>
            <div>
              <h4
                className={"hello "}
                data-aos-duration={1000}
                data-aos="fade-up"
                data-aos-delay={1500}
              >
                <span>▶</span> Hy my name is Amine Louni
              </h4>
              <h4
                className={"title"}
                data-aos-duration={1000}
                data-aos="fade-up"
                data-aos-delay={1700}
              >
                Full Stack <br /> Developer
                <span className={"titlePart"}>.</span>
              </h4>
              <p
                className={"text"}
                data-aos-duration={1000}
                data-aos="fade-up"
                data-aos-delay={1800}
              >
                Since beginning my journey as a software engineer , I &apos;ve
                done remote work for agencies, consulted for startups, and
                collaborated with talented people to create digital products for
                both business and consumer use.
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
                  <span className="btn__text">Check out my works</span>{" "}
                </button>
              </Link>
              <br />
            </div>
          </div>
          <div className={`col-lg-5  col-photo`}>
            <div className={"xs-overlay "} />
            <div
              className="avatarShapes "
              data-aos-duration={1000}
              data-aos="fade-in"
              data-aos-delay={500}
            >
              <Image src={AvatarShapes} alt="shapes" />
            </div>
            <div className="img-container">
              <Image
                className={"photo "}
                height={330}
                width={300}
                src={Me}
                alt="amint louni"
              />
              <div className="img-container__overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
