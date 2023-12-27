import React, { useContext } from "react";
import "./Toggle.css";
import { IoMdSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { themeContext } from "../../Context";
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <IoMoonOutline />
      <IoMdSunny />
      <div
        className="toggle-button"
        style={darkMode ? { left: "3px" } : { right: "3px" }}
      ></div>
    </div>
  );
};

export default Toggle;
