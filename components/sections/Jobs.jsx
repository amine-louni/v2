import classes from "../../styles/Home.module.scss";

export default function Jobs() {
  return (
    <section className={classes["section-dark"]}>
      <h3 className={classes["bg-heading-light"]}>Experience</h3>
      <div className="container">
        <h2
          className={`${classes["section-title"]} ${classes["section-title-light"]}`}
        >
          <span>02. </span> Where I’ve Worked
        </h2>
        <div className="row">
          <div className="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              ipsum distinctio. Debitis nihil alias rerum officiis quia quasi
              adipisci laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
