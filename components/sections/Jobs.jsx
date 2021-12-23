import classes from "../../styles/Home.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Jobs() {
  return (
    <section
      className={`${classes["section-dark"]} ${classes["jobs-section"]}`}
    >
      <h3 className={classes["bg-heading-light"]}>Experience</h3>
      <div className="container">
        <h2
          className={`${classes["section-title"]} ${classes["section-title-light"]}`}
        >
          <span>02. </span> Where I’ve Worked
        </h2>
        <div className="row">
          <div className="col-lg-">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              ipsum distinctio. Debitis nihil alias rerum officiis quia quasi
              adipisci laborum.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <Tabs>
                <TabList>
                  <Tab>
                    <p>Goldencorp</p>
                  </Tab>
                  <Tab>
                    <p>Orcloud</p>
                  </Tab>
                </TabList>
                <TabPanel>
                  <div className="panel-content">
                    <h3>
                      <span className="title">Full stack developer</span>
                      <a href="#">@Goldencorp</a>
                    </h3>
                    <small>October 2020 - Present</small>

                    <ul>
                      <li>
                        Developing the frontend using react and the latest
                        technologies while keeping performance in check.
                      </li>
                      <li>
                        Optimize and build new features using react-native.
                      </li>
                      <li>
                        Develop intuitive, usable, and engaging interactions and
                        visual designs for mobile.
                      </li>
                      <li>
                        Developing features to enhance the user experience.
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="panel-content">
                    <h3>
                      <span className="title">Front end developer</span>
                      <a href="#">@Orcloud</a>
                    </h3>
                    <small>September 2019 - October 2020</small>

                    <ul>
                      <li>
                        Collaborate with the project manager to create a brand
                        identity for clients.
                      </li>
                      <li>
                        Determining the structure and design of web pages.
                      </li>
                      <li>
                        Optimizing web pages for maximum speed and scalability.
                      </li>
                      <li>
                        Maintaining brand consistency throughout the design.
                      </li>
                      <li>
                        Make sure that the website work on all devices (Desktop,
                        Tablet. Phone)
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
