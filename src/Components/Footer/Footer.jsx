import React, { useContext } from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import wave from "../../assets/Images/wave.png";
import { FaHeart } from "react-icons/fa";
import { themeContext } from "../../Context";
const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%", height: "200px" }} />

      <div className="footer-content">
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/maryam-hassan-577085239/"
            target="_blank"
            className="footer-links"
            style={{
              color: darkMode ? "black" : "",
            }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mariam-54?tab=repositories"
            target="_blank"
            className="footer-links"
            style={{
              color: darkMode ? "black" : "",
            }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100012603613874&mibextid=kFxxJD"
            target="_blank"
            className="footer-links"
            style={{
              color: darkMode ? "black" : "",
            }}
          >
            <FaFacebook />
          </a>{" "}
        </div>
        <p
          className="footer-info"
          style={{
            color: darkMode ? "black" : "",
          }}
        >
          © 2023 Copyright made with{" "}
          <FaHeart
            style={{
              marginRight: "5px",
              color: "var( --Secondary-2)",
              fontSize: "15px",
              color: darkMode ? "black" : "",
            }}
          />
          by{" "}
          <span
            style={{
              color: "var(--Secondary-2)",
              fontSize: "15px",
              color: darkMode ? "black" : "",
            }}
          >
            Maryam Hassan
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
