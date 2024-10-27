import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h2 className="footer-heading">About Us</h2>
        <p className="footer-paragraph">
          We provide reliable services to help your business thrive in an
          increasingly competitive landscape. Our team is dedicated to offering
          high-quality solutions tailored to meet your unique needs,
        </p>
      </div>

      <div className="footer-column">
        <h2 className="footer-heading">Quick Links</h2>
        <ul className="footer-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h2 className="footer-heading">Contact Us</h2>
        <p className="footer-paragraph">Phone: +123 456 7890</p>
        <p className="footer-paragraph">Email: info@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
