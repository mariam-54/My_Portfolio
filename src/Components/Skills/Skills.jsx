import React, { useContext } from "react";
import "./Skills.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { skillsData } from "../../resumeData";

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skills section" id="Skills">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="skills-header"
        >
          <span style={{ color: darkMode ? "var(--text-color)" : "var(--Black)" }}>
            My Skills
          </span>
          <h2>Technical Expertise</h2>
        </motion.div>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: categoryIndex * 0.2 }}
              className="skills-category"
              style={{ background: darkMode ? "var(--Black)" : "var(--White)" }}
            >
              <h3>{category}</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;