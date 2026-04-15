import React, { useContext } from "react";
import "./Achievements.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaProjectDiagram, FaGithub } from "react-icons/fa";
import { achievementsData } from "../../resumeData";

const Achievements = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const iconMap = {
    FaCertificate: <FaCertificate />,
    FaProjectDiagram: <FaProjectDiagram />,
    FaTrophy: <FaTrophy />,
    FaGithub: <FaGithub />
  };

  return (
    <div className="achievements section" id="Achievements">
      <div className="achievements-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="achievements-header"
        >
          <span style={{ color: darkMode ? "var(--text-color)" : "var(--Black)" }}>
            Achievements
          </span>
          <h2>My Accomplishments</h2>
        </motion.div>
        <div className="achievements-grid">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="achievement-card"
              style={{ background: darkMode ? "var(--Black)" : "var(--White)" }}
            >
              <div className="achievement-icon">
                {iconMap[achievement.icon]}
              </div>
              <div className="achievement-number">
                {achievement.number}
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;