import React from "react";
import AboutCard from "../components/AboutCard";
import about1 from "../assets/images/about/aboutimg-1.jpg";
import about2 from "../assets/images/about/aboutimg-2.jpg";
import about3 from "../assets/images/about/aboutimg-3.jpg";
import about4 from "../assets/images/about/aboutimg-4.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <section className="aboutPage">
      <h1>About Us</h1>

      <div className="about">
        <AboutCard>
          <div className="aboutimg">
            <img src={about4} alt="" />

            <img src={about2} alt="" />
            <img src={about3} alt="" />
            <img src={about1} alt="" />
          </div>
          <div className="abouttext">
            <h1>Mission</h1>
            <p>
              The mission of the orgainzation is to empower young women on
              leadership, sexual and reproductive health and vocational skills
              training.
            </p>
          </div>
        </AboutCard>
        <AboutCard>
          <div className="abouttext abouttalk">
            <h2 className="talk1">
              FEEM supports and empowers marginalized young women to learn,
              thrive and lead change. The Initiative is with the aim of helping
              young women make informd decisions about their lives.
            </h2>
          </div>

          <div className="abouttext abouttalk">
            <h2 className="talk2">
              We catalyze the power of young women to make very informative
              decisions about themselves in order to create a better future for
              themselves, their communities and the whole of Africa.
            </h2>
          </div>
        </AboutCard>
        <AboutCard>
          <div className="abouttext">
            <h1>Vision</h1>
            <p>
              Our vision as an organization is to ensure that 70% young women in
              the Cape Coast Metropolis and the Bolgatanga Municipality are
              making informed decisions about their lives and 50% are making in
              leadership roles especially Parliament of Ghana by the year 2030.
            </p>
          </div>
          <div className="aboutimg">
            <img src={about4} alt="" />

            <img src={about2} alt="" />
            <img src={about3} alt="" />
            <img src={about1} alt="" />
          </div>
        </AboutCard>
      </div>
    </section>
  );
};

export default About;
