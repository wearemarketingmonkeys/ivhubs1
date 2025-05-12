import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo/logo.png";
import mblLogo from "../assets/img/logo/small-logo.png";
import waIcon from "../assets/icons/wa.png";
import hamburger from "../assets/icons/hamburger.png";
import MobileMenu from "./MobileMenu";
import Modal from "react-minimal-modal";
import caretBlack from "../assets/icons/caret-black.png";
import { GoArrowUpRight } from "react-icons/go";
import wellnessImg from "../assets/img/iv-therapy/ivtherapymenu2.webp";
import energyBoosterImg from "../assets/img/iv-therapy/ivtherapymenu1.webp";
import {menuItems} from "../mocks/menuItems";

const ivTherapyItems = [
  {
    img: wellnessImg,
    drips: 23,
    title: "Wellness Drips",
    btnTxt: "Explore Drips",
    btnUrl: "/iv-therapy/drips",
    items: [
      { dripsName: "Beauty Hub", dripsUrl: "/iv-therapy/drips/beauty-hub" },
      { dripsName: "Boost Hub", dripsUrl: "/iv-therapy/drips/boost-hub" },
      { dripsName: "Cleanse Hub", dripsUrl: "/iv-therapy/drips/cleanse-hub" },
      { dripsName: "Energy Hub", dripsUrl: "/iv-therapy/drips/energy-hub" },
      { dripsName: "Fitness Hub", dripsUrl: "/iv-therapy/drips/fitness-hub" },
      {
        dripsName: "Fitness Hub Express",
        dripsUrl: "/iv-therapy/drips/fitness-hub-express",
      },
      { dripsName: "Glow Hub", dripsUrl: "/iv-therapy/drips/glow-hub" },
      {
        dripsName: "Glow Hub Express",
        dripsUrl: "/iv-therapy/drips/glow-hub-express",
      },
      {
        dripsName: "Hairfall Defense",
        dripsUrl: "/iv-therapy/drips/hairfall-defense",
      },
      { dripsName: "Immune Hub", dripsUrl: "/iv-therapy/drips/immune-hub" },
      {
        dripsName: "Women's Health Hub",
        dripsUrl: "/iv-therapy/drips/womens-health-hub",
      },
      // { dripsName: "Youth Hub", dripsUrl: "/iv-therapy/drips/youth-hub" },
      { dripsName: "IV Wellness Supreme", dripsUrl: "/iv-therapy/drips/iv-wellness-supreme" },
      { dripsName: "Zeus Drip", dripsUrl: "/iv-therapy/drips/zeus-drip" },
      {
        dripsName: "Queen Victoria Drip",
        dripsUrl: "/iv-therapy/drips/queen-victoria-drip",
      },
      {
        dripsName: "Chelation Therapy",
        dripsUrl: "/iv-therapy/drips/chelation-therapy",
      },
      {
        dripsName: "Performance support",
        dripsUrl: "/iv-therapy/drips/performance-support",
      },
      {
        dripsName: "Royal Cleanse",
        dripsUrl: "/iv-therapy/drips/royal-cleanse",
      },
      {
        dripsName: "Recovery Hub (Anti-stress",
        dripsUrl: "/iv-therapy/drips/recovery-hub-anti-stress",
      },
      { dripsName: "Detox Drip", dripsUrl: "/iv-therapy/drips/detox-drip" },
      {
        dripsName: "Hydration Hub Express",
        dripsUrl: "/iv-therapy/drips/hydration-hub-express",
      },
      { dripsName: "NAD+ 100mg", dripsUrl: "/iv-therapy/drips/nad-plus-100mg" },
      { dripsName: "NAD+ 250mg", dripsUrl: "/iv-therapy/drips/nad-plus-250mg" },
      { dripsName: "NAD+ 500mg", dripsUrl: "/iv-therapy/drips/nad-plus-500mg" },
    ],
  },
  {
    img: energyBoosterImg,
    drips: 5,
    title: "Energy Boosters",
    btnTxt: "Explore Boosters",
    btnUrl: "/iv-therapy/boosters",
    desc: "Give your health an instant upgrade with our targeted IV Boosters. These quick, nutrient-rich infusions are designed to provide rapid relief and support, helping you feel your best in no time. Perfect for an on-the-go energy lift!",
    items: [
      {
        dripsName: "Vitamin C Booster",
        dripsUrl: "/iv-therapy/boosters#vitaminCBooster",
      },
      {
        dripsName: "Super B's Booster",
        dripsUrl: "/iv-therapy/boosters#superBBooster",
      },
      {
        dripsName: "Co-Enzyme Q10 Booster",
        dripsUrl: "/iv-therapy/boosters#coq10Booster",
      },
      {
        dripsName: "MIC Booster",
        dripsUrl: "/iv-therapy/boosters#micBooster",
      },
      {
        dripsName: "Vitamin D Booster",
        dripsUrl: "/iv-therapy/boosters#vitamindBooster",
      },
    ],
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [menuClosed, setMenuClosed] = useState(false);

  const handleSubmenuClick = () => {
    setMenuClosed(true);
  
    // Use requestAnimationFrame to ensure the class applies before removing
    requestAnimationFrame(() => {
      setTimeout(() => {
        setMenuClosed(false);
      }, 100); // just enough for CSS to apply transition
    });
  };
  
  

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className="top-nav text-center py-2 bg-dark text-light">
      <Link href="/iv-therapy/drips" className="text-light">
      In-Clinic & At-Home IV Therapy – Wellness your way, anytime, anywhere.
      </Link>
    </div>
      <div className={`header ${isSticky ? "sticky" : ""} ${menuClosed ? "hide-submenu" : ""}`} onMouseLeave={() => setMenuClosed(false)}>
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <button
                className="hamburger-btn"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <img src={hamburger} alt="hamburger" />
              </button>
              <Link to="/">
                <img src={logo} alt="logo" className="desk-logo" />
                <img src={logo} alt="logo" className="mbl-logo" />
              </Link>
              <div className="header-right">
                <ul className="menu-wrap">
                  {menuItems.map((item, index) => (
                    <li className="menu-item" key={index}>
                      {item.submenuWrapper ? (
                        <>
                          <Link to={item.to} className="menu-single-item">
                            <span>{item.label}</span>
                            <img src={caretBlack} alt="caret" />
                          </Link>
                          <div className="submenu-wrapper">
                            {item.submenuWrapper.map((submenuWrapper, submenuWrapperIndex) => (
                              <div className="submenu-wrap" key={submenuWrapperIndex}>
                              {submenuWrapper.submenuWrap.map((menuWrap, menuWrapIndex) => (
                              <div className="" key={menuWrapIndex}>
                                <div className="submenu-title">
                                  {menuWrap.submenuTitle}
                                </div>
                                <ul className="submenu">
                                  {menuWrap.submenu.map((sub, subIndex) => (
                                    <li key={subIndex}>
                                      <Link to={sub.to} onClick={() => setMenuClosed(true)}>{sub.label}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                              </div>
                            ))}
                          </div>
                        </>
                      ) : item.modal ? (
                        <div
                          className="menu-single-item"
                          onClick={() => setIsOpen(true)}
                        >
                          <span>{item.label}</span>
                        </div>
                      ) : (
                        <Link to={item.to}>{item.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="phone-wrap">
                  {/* <NavLink className="tel" to={"tel:+97180048482"}>
                  +971 800 48482
                  </NavLink> */}
                  <Link to="https://book.ivhub.com/" className="btn">
                    Book Now
                  </Link>
                  <NavLink
                    className="whatsapp"
                    to={"https://wa.me/97180048482"}
                  >
                    <img src={waIcon} className="wa-icon" alt="WhatsApp" />
                  </NavLink>
                </div>
              </div>
          <div className="btn-wrap">
            <Link to="https://book.ivhub.com/" className="btn">
              Book Now
            </Link>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mbl-header">
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
      <Modal
        open={isOpen}
        onOpenChange={setIsOpen}
        position="top"
        animation="slide"
        blur
        width={"100vw"}
        wrapperClassName="header-popup"
        title="Iv therapy"
      >
        <div className="container">
          <div className="iv-popup-wrap">
            <div className="top">
              <h1>
                Discover the Power of <br /> Personalized IV Therapy
              </h1>
              <div className="button-wrap">
                <Link onClick={() => setIsOpen(false)} to={"/iv-therapy/drips"}>
                  <span>Wellness Drips</span>
                  <GoArrowUpRight />
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to={"/iv-therapy/boosters"}
                >
                  <span>Energy Boosters</span>
                  <GoArrowUpRight />
                </Link>
              </div>
            </div>

            {ivTherapyItems.map((x, index) => (
              <div className="drips-items-wrap" key={index}>
                <div className="left">
                  <img src={x.img} alt="" />
                </div>
                <div className="right">
                  <div className="drips-qnt">{x.drips} Drips</div>
                  <div className="drips-name-wrap">
                    <h2>{x.title}</h2>
                    <div className="btn-wrap">
                      <Link
                        onClick={() => setIsOpen(false)}
                        className="btn"
                        to={x.btnUrl}
                      >
                        {x.btnTxt}
                      </Link>
                    </div>
                  </div>

                  {x.desc && <p>{x.desc}</p>}

                  <div className="drips-items">
                    {x.items.map((y, yIndex) => (
                      <Link
                        onClick={() => setIsOpen(false)}
                        to={y.dripsUrl}
                        key={yIndex}
                      >
                        {y.dripsName}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
