import Image from "next/image";
import AvatarShapes from "../../public/photo-bg.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay animate__animated animate__fadeInDown  animate-delay-7" />
      <div className={`container`}>
        <div className={`row  `}>
          <div className={`col-lg-7  main-col `}>
            <div>
              <h4
                className={
                  "hello animate__animated animate__fadeInUp  animate-delay-10"
                }
              >
                <span>▶</span> Hy my name is Amine Louni
              </h4>
              <h4
                className={
                  "title animate__animated animate__fadeIn  animate-delay-15"
                }
              >
                Full Stack <br /> Developer
                <span className={"titlePart"}>.</span>
              </h4>
              <p
                className={
                  "text animate__animated animate__fadeIn  animate-delay-15"
                }
              >
                Since beginning my journey as a software engineer , I &apos;ve
                done remote work for agencies, consulted for startups, and
                collaborated with talented people to create digital products for
                both business and consumer use.
              </p>
              <button className="btn animate__animated animate__fadeInUp  animate-delay-20">
                <span className="btn__text">Check out my works</span>{" "}
              </button>
              <br />
            </div>
          </div>
          <div className={`col-lg-5  col-photo`}>
            <div
              className={
                "xs-overlay animate__animated animate__fadeIn  animate-delay-7"
              }
            />
            <div className="avatarShapes animate__animated animate__fadeIn  animate-delay-7">
              <Image src={AvatarShapes} alt="shapes" />
            </div>
            <div
              className={
                "photo animate__animated animate__fadeIn  animate-delay-7"
              }
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
