import Head from "next/head";
import Navbar from "../components/Navbar";
import classes from "../styles/Home.module.scss";
import ZigzagYellow from "../public/zigzag-yellow.svg";
import ZigzagBlue from "../public/zigzag-blue.svg";
import SquareBlue from "../public/square-blue.svg";
import SquareYellow from "../public/square-yellow.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amine Louni</title>
        <meta name="description" content="Generated by Amine Louni" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <section className={classes.hero}>
          <div className={classes.overlay} />
          <div className={`container ${classes.container}`}>
            <div className={`row ${classes.row}`}>
              <div className="col-md-7">
                <h4 className={classes.hello}>
                  <span>▶</span> Hy my name is Amine Louni
                </h4>
                <h4 className={classes.title}>
                  Full Stack
                  <div className={classes.titlePart}>Developer.</div>
                </h4>
                <p className={classes.text}>
                  I’m a software engineer specializing in building (and
                  occasionally designing) exceptional digital experiences.
                  Currently, I’m focused on building accessible, human-centered
                  products at Upstatement.
                </p>
                <button className="btn">Check out my works</button>
                <br />
              </div>
              <div className={`col-md-5 ${classes["col-photo"]}`}>
                <div className={classes.zig1}>
                  <Image src={ZigzagYellow} alt="zig-zag" />
                </div>
                <div className={classes.zig2}>
                  <Image src={ZigzagYellow} alt="zig-zag" />
                </div>
                <div className={classes.zig3}>
                  <Image src={ZigzagBlue} alt="zig-zag" />
                </div>

                <div className={classes.photo}></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>footer</footer>
    </>
  );
}
