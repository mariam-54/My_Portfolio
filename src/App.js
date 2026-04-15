import "bootstrap/dist/css/bootstrap.min.css";
import { themeContext } from "./Context";
import { useContext, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Services from "./Components/Servises/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Certificate from "./Components/Certificate/Certificate";
import Testimonials from "./Components/Testimonials/Testimonials";
import Achievements from "./Components/Achievements/Achievements";
import { FaCircleArrowUp } from "react-icons/fa6";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [showBtnScroll, setShowBtnScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtnScroll(true);
      } else {
        setShowBtnScroll(false);
      }
    });
  }, []);

  return (
    <div
      className="App"
      id="Up"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
        "--text-color": darkMode ? "#ffffff" : "#000000",
      }}
    >
      <BrowserRouter>
        <Header />
        <Banner />
        <About />
        <Education />
         <Services />
         <Experience />
        <Skills />
       
        <Portfolio />
        <Certificate />
        <Testimonials />
        <Achievements />
        <Contact />
        <Footer />

        <a
          style={{ opacity: showBtnScroll ? 1 : 0, transition: "1s" }}
          href="#Up"
        >
          <button className="scroll2Top">
            <FaCircleArrowUp />
          </button>
        </a>
      </BrowserRouter>
    </div>
  );
}

export default App;
