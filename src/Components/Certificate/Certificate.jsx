import React, { useState } from "react";
import "./Certificate.css";
import { AnimatePresence, motion } from "framer-motion";
import { FaLink } from "react-icons/fa6";
import { myCertificate } from "./myCertificate";

const Certificate = () => {
  const [currentActive, setCurrentActive] = useState("All");
  const [arr, setArr] = useState(myCertificate);
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = myCertificate.filter((item) => {
      const categoryArr = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return categoryArr === buttonCategory;
    });

    setArr(newArr);
  };
  return (
    <div className="d-flex certificate " id="Certificate">
      <div className="d-flex flex-column certificate-left-side">
        <button
          onClick={() => {
            setCurrentActive("All");
            setArr(myCertificate);
          }}
          className={currentActive === "All" ? "active" : null}
        >
          all Certificates
        </button>
        <button
          onClick={() => {
            handleClick("sef");
          }}
          className={currentActive === "sef" ? "active" : null}
        >
          SEF Academy
        </button>
        <button
          onClick={() => {
            handleClick("hackerrank");
          }}
          className={currentActive === "hackerrank" ? "active" : null}
        >
          HackerRank
        </button>
        <button
          onClick={() => {
            handleClick("datacamp");
          }}
          className={currentActive === "datacamp" ? "active" : null}
        >
          DataCamp
        </button>
      </div>

      <div className="d-flex certificate-right-side">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.div
                layout
                initial={{ transform: "scale(0.5)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 9, stiffness: 50 }}
                key={item.imgPath}
                className="certificate-card-projects"
              >
                <img width={265} src={item.imgPath} alt="Certificate" />
                <div
                  className="certificate-card-box"
                  style={{ width: "265px" }}
                >
                  <h2 className="certificate-card-box-heading">
                    {item.certificateTitle}
                  </h2>
                  <p className="certificate-card-box-info">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Architecto sit ullam, repellat quisquam earum quo.
                  </p>
                  <div className="certificate-card-links">
                    <a href={item.linkPath} target="_blank">
                      <FaLink />
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

export default Certificate;
