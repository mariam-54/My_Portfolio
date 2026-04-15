import React from "react";
import "./Education.css";
import { motion } from "framer-motion";
import bfciLogo from "../../assets/Images/fci-removebg-preview.png";

const Education = () => {
  return (
    <div className="education section" id="Education">

      <div className="education-container">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="edu-title"
        >
          Education
        </motion.h2>

        <div className="timeline">

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-icon">
              <img src={bfciLogo} alt="BFCI Logo" />
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Faculty of Computer and Artificial Intelligence</h3>
                <span className="date">Sep 2018 – Jun 2022</span>
              </div>
              <h4>Benha University</h4>
              <p>Bachelor of Scientific Computing Department</p>
            </div>
          </motion.div>

        </div>

      </div>

    </div>
  );
};

export default Education;