import React, { useState } from "react";
import "./Portfolio.css";
import { AnimatePresence, motion } from "framer-motion";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { myProjects } from "./myProjects";

const Portfolio = () => {
  const [currentActive, setCurrentActive] = useState("All");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const categoryArr = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return categoryArr === buttonCategory;
    });

    setArr(newArr);
  };
  return (
    <div className="d-flex portfolio " id="Portfolio">
      <div className="d-flex flex-column portfolio-left-side">
        <button
          onClick={() => {
            setCurrentActive("All");
            setArr(myProjects);
          }}
          className={currentActive === "All" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          Bootstrap
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          javaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          react.js
        </button>
      </div>

      <div className="d-flex portfolio-right-side">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.div
                layout
                initial={{ transform: "scale(0.5)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 9, stiffness: 50 }}
                key={item.imgPath}
                className="portfolio-card-projects"
              >
                <img width={265} src={item.imgPath} alt="Project" />
                <div className="portfolio-card-box" style={{ width: "265px" }}>
                  <h2 className="portfolio-card-box-heading">
                    {item.projectTitle}
                  </h2>
                  <p className="portfolio-card-box-info">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Architecto sit ullam, repellat quisquam earum quo.
                  </p>
                  <div className="portfolio-card-links">
                    <a href={item.linkPath} target="_blank">
                      <FaLink />
                    </a>
                    <a href={item.githubPath} target="_blank">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;
