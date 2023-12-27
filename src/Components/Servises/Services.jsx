import React from "react";
import "./Services.css";
import codeIcon from "../../assets/Images/code.png";
import adobeIcon from "../../assets/Images/adobe.png";
import { Link } from "react-scroll";
import Card from "../Card/Card";
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 1, type: "spring" };

  return (
    <div className="services" id="Services">
      {/* Left side */}
      <div className="service-about">
        <span>My Awesome</span>
        <span>Services</span>
        <p>
          I'm a junior front-end web developer with Proven experience developing
          <br />
          consumer-focused websites using HTML, CSS, Bootstrap,JavaScript and
          React.js.
          <br />
          I have a good knowledge of the best practices for web design, user
          experience,
          <br />
          and speed, I'm looking to gainmore technical and soft skills to
          achieve my goals
          <br />
          as a web developer.
        </p>
        <Link to="Contact" smooth={true} spy={true}>
          <button className="hire-button">Hire Me</button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right side */}
      <div className="service-cards">
        {/* First Card */}
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
        >
          <Card
            icon={codeIcon}
            heading={"Web Developer"}
            detail={"HTML, CSS, BootStrap, Sass, JavaScript, ES6, React.js"}
          />
        </motion.div>

        {/* Second Card */}
        <motion.div
          initial={{ left: "-10rem", top: "12rem" }}
          whileInView={{ left: "-9rem", top: "16rem" }}
          transition={transition}
        >
          <Card
            icon={codeIcon}
            heading={"Programming Instructor"}
            detail={"Web Development, Scratch, Programming basics"}
          />
        </motion.div>

        {/* Third Card */}
        <motion.div
          initial={{ top: "15rem", left: "10rem" }}
          whileInView={{ left: "19rem", top: "22rem" }}
          transition={transition}
        >
          <Card
            icon={adobeIcon}
            heading={"UI/UX Designer"}
            detail={
              " I learn Figma and Adobe XD, (Web design & Mobile Application) "
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(  --purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
