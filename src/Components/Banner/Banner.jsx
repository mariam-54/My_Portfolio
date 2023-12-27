import React, { useState, useEffect, useContext } from "react";
import TrackVisibility from "react-on-screen";
import { useSpring, animated } from "react-spring";
import maryamImage from "../../assets/Images/maryam.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Banner.css";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context";
import Lottie from "lottie-react";
import lab from "../../assets/animation/code.json";

const Banner = () => {
  const props = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-End Web Developer", "Instructor", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="home section" id="Home">
      <div className="home-rectangle"></div>
      <div className="home-container container grid">
        <div
          className="home-perfil perfil"
          style={{
            background: darkMode ? "black" : "",
          }}
        >
          <animated.div style={props}>
            <div className="perfil-content">
              <animated.img
                src={maryamImage}
                className="perfil-img"
                alt="logo"
                style={props}
              />
            </div>
          </animated.div>
        </div>
        <Lottie style={{ height: "180px" }} animationData={lab} />
        <div className="grid">
          <div className="home-data grid">
            <h2
              className="home-intro"
              style={{
                color: darkMode ? "var(--Primary)" : "",
              }}
            >
              Welcome to my Portfoli
            </h2>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h3>
                    {`Hi! I'm Maryam Hassan `}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h3>
                </div>
              )}
            </TrackVisibility>
            <div className="home-social">
              <a
                href="https://github.com/mariam-54?tab=repositories"
                target="_blank"
                className="home-social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/maryam-hassan-577085239/"
                target="_blank"
                className="home-social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100012603613874&mibextid=kFxxJD"
                target="_blank"
                className="home-social-link"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <a
            href={Resume}
            download
            className="home-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default Banner;
