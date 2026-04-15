import React, { useContext } from "react";
import "./About.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
const aboutImage =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80";

  return (
    <div className="about section" id="About">
      <div className="about-container">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <span style={{ color: darkMode ? "var(--text-color)" : "var(--Black)" }}>
            About Me
          </span>

          <h2>Get to know me</h2>

          <p>
            I’m a Front-end Developer, UI/UX Designer, and Programming Instructor who builds polished digital experiences with React and thoughtful design.
          </p>

          <p>
            I turn ideas into fast, modern, and user-friendly web experiences — solving challenges with clean, scalable code and a relentless focus on real people.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="about-image"
        >
         <div className="about-image">
  <div className="image-wrapper">
    <img src={aboutImage} alt="Developer Workspace" />
  </div>
  <div className="about-blur"></div>
</div>

          <div className="about-blur"></div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;