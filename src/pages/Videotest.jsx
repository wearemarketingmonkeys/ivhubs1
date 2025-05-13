import React from "react";
import { Link } from "react-router-dom";

const Videotest = () => {
  return (
    <div className="termsAndCondition-page py-5" style={{ margin: "50px auto" }}>
      <div className="container">
      <video
        className="hero-video"
        autoPlay
        muted
        playsInline
        onEnded={(e) => {
            e.target.currentTime = 0;
            e.target.play();
        }}
        >
        <source src="https://www.ivhub.com/assets/IV-Welness-Drips-RUYeFUMf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Videotest;