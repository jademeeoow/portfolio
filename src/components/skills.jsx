import "../assets/styles/skills.css";

import frontend from "../assets/images/desktop.svg";
import backend from "../assets/images/server.svg";
import link from "../assets/images/database.svg";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <img src={frontend} alt="Web Development" className="skill-icon" />
          <div className="skill-card">
            <h3 className="skill-name">Front-End</h3>
            <p className="skill-description">
              I have basic knowledge and understanding of
              <strong className="crim"> HTML</strong>,
              <strong className="crim"> CSS</strong>,
              <strong className="crim"> JavaScript</strong>, and
              <strong className="crim"> React </strong>
              to build simple yet visually appealing web pages and user
              interfaces.
            </p>
          </div>
        </div>
        <div className="skill-card">
          <img
            src={backend}
            alt="Programming Languages"
            className="skill-icon"
          />
          <h3 className="skill-name">Programming Languages</h3>
          <p className="skill-description">
            I have knowledge and understanding of
            <strong className="crim"> PHP</strong> and
            <strong className="crim"> Python</strong>, allowing me to develop
            and manage server-side logic, APIs, and databases effectively.
          </p>
        </div>

        <div className="skill-card">
          <img src={link} alt="Database Management" className="skill-icon" />
          <h3 className="skill-name">Database Management</h3>
          <p className="skill-description">
            I am proficient in working with
            <strong className="crim"> MariaDB</strong> and
            <strong className="crim"> SQLite</strong>, enabling me to design,
            manage, and interact with relational databases efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
