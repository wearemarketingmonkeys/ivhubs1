import React, { useState } from "react";
import heroImg from "../assets/img/contact/hero.webp";
import { Link } from "react-router-dom";
import { FaRegClock, FaLocationArrow } from "react-icons/fa";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiInstagramLine,
  RiDribbbleLine,
} from "react-icons/ri";

const socialLinks = [
  { icon: <RiFacebookCircleLine />, url: "https://facebook.com" },
  { icon: <RiTwitterLine />, url: "https://twitter.com" },
  { icon: <RiInstagramLine />, url: "https://instagram.com" },
  { icon: <RiDribbbleLine />, url: "https://dribble.com" },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, subject, email, message } = formData;

    if (!name || !subject || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const data = new FormData();
    data.append("name", name);
    data.append("subject", subject);
    data.append("email", email);
    data.append("message", message);

    const actionUrl = `${window.location.origin}/php/contact.php`;

    try {
      const response = await fetch(actionUrl, {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", subject: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-hero">
        <img className="hero-img" src={heroImg} alt="hero-img" />
        <div className="overlay"></div>
        <div className="hero-wrapper">
          <div className="container">
            <div className="hero-wrap">
              <div className="left">
                <div>
                  <span className="text-light">Need assistance?</span>
                  <span className="text-italic"> We're here to help.</span>
                </div>
                <div className="btn-wrap">
                  <Link to={"/"} className="btn btn-light">
                    Booking Today
                  </Link>
                  <Link to={"/"} className="btn btn-light">
                    Schedule a consultation
                  </Link>
                </div>
              </div>
              <div className="right">
                <FaRegClock />
                <div className="txt">
                  <span>Everyday Days:</span>
                  <span>10 am - 10 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="container">
          <div className="form-wrapper">
            <div className="heading">
              <h1>Contact Us</h1>
              <p>Ready to assist you 🟢</p>
            </div>
            <div className="form-wrap">
              <div className="left">
                <div className="single-info">
                  <PiWhatsappLogoLight />
                  <p>Phone / WhatsApp</p>
                  <p>+971 800 48482</p>
                </div>
                <div className="single-info">
                  <HiOutlineEnvelope />
                  <p>Email</p>
                  <p>hello@ivhub.com</p>
                </div>
                <div className="social-wrap">
                  {socialLinks.map((x, index) => (
                    <Link to={x.url} key={index}>
                      {x.icon}
                    </Link>
                  ))}
                </div>
                <div className="direction">
                  <FaLocationArrow />
                  <span>Get direction</span>
                </div>
              </div>
              <div className="right">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">NAME</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">SUBJECT</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">MAIL</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">MESSAGE</label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {status && <p className="form-status">{status}</p>}

                  <div className="btn-wrap">
                    <button type="submit" className="btn">
                      Send now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;