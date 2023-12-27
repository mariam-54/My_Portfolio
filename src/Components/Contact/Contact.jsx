import React, { useContext } from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../assets/animation/done.json";
import sendAnimation from "../../assets/animation/send.json";
import { themeContext } from "../../Context";
const Contact = () => {
  const [state, handleSubmit] = useForm("xbjnrvyk");
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form" id="Contact">
      {/* Contact left side */}
      <div className="contact-left-side ">
        <Lottie
          style={{ height: "380px", marginTop: "-45px" }}
          animationData={sendAnimation}
        />

        <div
          className="contact-blur contact-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
      {/* Contact right side */}
      <div className="contact-right-side">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            autoComplete="off"
            required
            style={{
              background: darkMode ? "black" : "",
              color: darkMode ? "white" : "",
            }}
          />
          <input
            autoComplete="off"
            type="email"
            name="user_email"
            className="user"
            placeholder="Email_address"
            required
            style={{
              background: darkMode ? "black" : "",
              color: darkMode ? "white" : "",
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required
            style={{
              background: darkMode ? "black" : "",
              color: darkMode ? "white" : "",
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            value="Send"
            className="contact-button"
            disabled={state.submitting}
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p className="d-flex">
              <Lottie
                loop={false}
                style={{ height: "40px", marginTop: "-6px" }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully.
            </p>
          )}

          <div
            className="contact-blur contact-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
