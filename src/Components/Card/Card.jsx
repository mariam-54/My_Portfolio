import React, { useContext } from "react";
import "./Card.css";
import { themeContext } from "../../Context";
const Card = ({ icon, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="card"
      style={{
        background: darkMode ? "black" : "",
      }}
    >
      <img src={icon} alt="Icon" style={{ width: "40px", height: "40px" }} />
      <h3
        style={{
          marginBottom: "-5px",
          color: darkMode ? "var(--Primary)" : "",
        }}
      >
        {heading}
      </h3>
      <p
        style={{
          color: darkMode ? "var(--gray)" : "",
        }}
      >
        {detail}
      </p>
      <button
        className="card-button"
        style={{
          color: darkMode ? "white" : "",
          background: darkMode ? "var(--Primary)" : "",
        }}
      >
        Read More
      </button>
    </div>
  );
};

export default Card;
