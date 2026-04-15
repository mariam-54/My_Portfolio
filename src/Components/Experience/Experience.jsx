import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import workIcon from "../../assets/Images/code.png"; // Reuse existing icon
import { experienceData } from "../../resumeData";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience section" id="Experience">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="experience-header"
        >
          <span style={{ color: darkMode ? "var(--text-color)" : "var(--Black)" }}>
            My Experience
          </span>
          <h2>Professional Journey</h2>
        </motion.div>
        <div className="experience-cards">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Card
                icon={workIcon}
                heading={`${exp.title} - ${exp.company}`}
                detail={`${exp.period}\n${exp.description}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;