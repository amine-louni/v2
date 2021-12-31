import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Jobs({ jobsData }) {
  return (
    <section id="jobs" className="section-dark jobs-section">
      <h3 className="bg-heading-light">Experience</h3>
      <div className="container">
        <h2 className="section-title section-title-light">
          <span>02. </span> Where I’ve Worked
        </h2>

        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 " data-aos-duration={500} data-aos="fade-up">
            <Tabs>
              <TabList>
                {jobsData.map((jobData) => (
                  <Tab key={jobData.fields.company}>
                    <p>{jobData.fields.company}</p>
                  </Tab>
                ))}
              </TabList>
              {jobsData.map((jobData) => (
                <TabPanel key={jobData.fields.company}>
                  <div className="panel-content">
                    <h3>
                      <span className="title">{jobData.fields.title}</span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={jobData.fields.companyLink}
                      >
                        @{jobData.fields.company}
                      </a>
                    </h3>
                    <small>{jobData.fields.time}</small>

                    <ul>
                      {jobData.fields.duties.map((oneDuty) => (
                        <li key={oneDuty}>{oneDuty}</li>
                      ))}
                    </ul>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
}
