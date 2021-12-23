import classes from "../../styles/Home.module.scss";

export default function About() {
  return (
    <section className={classes.section}>
      <h3 className={classes["bg-heading"]}>About</h3>
      <div className="container">
        <h2
          className={`${classes["section-title"]} ${classes["section-title-dark"]}`}
        >
          <span>01. </span>About Me
        </h2>

        <div className="row">
          <div className="col-lg-6 mb-lg">
            <h3>Software enginnering</h3>
            <p>
              I solve clients problems using digital solutions , Another reason
              a software engineering career is a great choice for me because the
              field is so broad and encompasses a variety of roles related to
              both computer applications and systems.
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </p>
            <ul className={classes.skillsList}>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>TypeScript</li>
              <li>React native</li>
            </ul>
          </div>

          <div className="col-lg-6 ">
            <h3>Passion for design</h3>
            <p>
              Being a Web designer enables you to not only work with websites
              every day but also to shape the way people interact with the Web.
              Plus, these days, a customer&apos;s first impression of a company
              is often through its website rather than print materials such as
              business cards or marketing mailings.
            </p>
            <p>Here are a few tools I’ve been working with recently:</p>
            <ul className={classes.skillsList}>
              <li>Figma</li>
              <li>Adobe illustrator</li>
              <li>Adobe XD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
