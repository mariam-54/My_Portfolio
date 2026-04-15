import React, { useContext } from "react";
import "./Testimonials.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonialsData } from "../../resumeData";

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="testimonials section" id="Testimonials">
      <div className="testimonials-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="testimonials-header"
        >
          <span style={{ color: darkMode ? "var(--text-color)" : "var(--Black)" }}>
            Testimonials
          </span>
          <h2>What Clients Say</h2>
        </motion.div>
        {testimonialsData.length > 0 ? (
          <div className="testimonials-grid">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="testimonial-card"
                style={{ background: darkMode ? "var(--Black)" : "var(--White)" }}
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="quote">{testimonial.quote}</p>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="client-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}, {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="no-testimonials">
            <p>Testimonials will be added as client feedback becomes available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;