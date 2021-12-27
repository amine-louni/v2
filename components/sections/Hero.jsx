import Image from "next/image";
import AvatarShapes from "../../public/photo-bg.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay" />
      <div className={`container`}>
        <div className={`row  `}>
          <div className={`col-lg-7  `}>
            <div>
              <h4 className={"hello"}>
                <span>▶</span> Hy my name is Amine Louni
              </h4>
              <h4 className={"title"}>
                Full Stack <br /> Developer
                <span className={"titlePart"}>.</span>
              </h4>
              <p className={"text"}>
                Since beginning my journey as a software engineer , I &apos;ve
                done remote work for agencies, consulted for startups, and
                collaborated with talented people to create digital products for
                both business and consumer use.
              </p>
              <button className="btn">
                <span className="btn__text">Check out my works</span>{" "}
              </button>
              <br />
            </div>
          </div>
          <div className={`col-lg-5  col-photo`}>
            <div className={"xs-overlay"} />
            <div className="avatarShapes">
              <Image src={AvatarShapes} alt="shapes" />
            </div>
            <div className={"photo"}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
