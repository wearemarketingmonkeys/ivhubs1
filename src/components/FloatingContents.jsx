import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import mblLogo from "../assets/img/logo/logo-white.png";

const FloatingContents = ({className}) => {
    return (
      <>
        <div className={`floating-wrap ${className}`}>
        <div className="hot-btn-wrap">
          <Link to="https://ivhub.com/" style={{ WebkitTextStroke: "0.5px" }}>CLINIC</Link>
          <span>|</span>
          <Link to="https://brushed.ae/">SPA</Link>
        </div>
        </div>

        <div className={`floating-wrap floatpackages ${className}`}>
        <div className="hot-btn-wrap">
          <Link to="/packages" style={{ WebkitTextStroke: "0.5px" }}>PACKAGES</Link>
        </div>
        </div>

        <div className={`floating-wrap floatwp ${className}`}>
        <FloatingWhatsApp  
              phoneNumber="+97180048482"
              accountName="IV Wellness Lounge"
              avatar={mblLogo}
              className="whatsapp_float"
              statusMessage="Typically replies within seconds"
              chatMessage="Hi there! 👋 How can we help you today?"
          />
        </div>
        </>
    );
};

export default FloatingContents;