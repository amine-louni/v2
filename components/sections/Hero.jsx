import classes from "../../styles/Home.module.scss";
import AvatarShapes from "../../public/photo-bg.svg";

import Image from "next/image";
import { FiArrowDown, FiFolder } from "react-icons/fi";

export default function Hero() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.overlay} />
        <div className={`container ${classes.container}`}>
          <div className={`row ${classes.row}`}>
            <div className={`col-lg-7 ${classes["main-col"]}`}>
              <div>
                <h4 className={classes.hello}>
                  <span>▶</span> Hy my name is Amine Louni
                </h4>
                <h4 className={classes.title}>
                  Full Stack <br /> Developer
                  <span className={classes.titlePart}>.</span>
                </h4>
                <p className={classes.text}>
                  Since beginning my journey as a software engineer , I &apos;ve
                  done remote work for agencies, consulted for startups, and
                  collaborated with talented people to create digital products
                  for both business and consumer use.
                </p>
                <button className="btn">
                  <span className="btn__text">Check out my works</span>{" "}
                </button>
                <br />
              </div>
            </div>
            <div className={`col-lg-5 ${classes["col-photo"]}`}>
              <div className={classes["xs-overlay"]} />
              <div className={classes.avatarShapes}>
                <Image src={AvatarShapes} alt="shapes" />
              </div>
              <div className={classes.photo}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
