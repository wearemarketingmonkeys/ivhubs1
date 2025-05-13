import React, { useState, useEffect, useRef } from "react";
import { Helmet } from 'react-helmet';

import { useOutsideClick } from "../hooks/useOutsideClick";
import { AiFillCaretDown } from "react-icons/ai";
import SpecialOfferCard from "../components/SpecialOfferCard";
import PromoPopup from '../components/PromoPopup';
import specialOffersData from "../mocks/specialOffersData.json";
import ivVideo from "../assets/video/IV-Welness-Drips.mp4";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import spinner from "../assets/img/home/spinner.png";
import smallLogo from "../assets/img/logo/small-logo.png";
import Testimonial from "../components/Testimonial";
import seenImg1 from "../assets/img/home/yahoo.png";
import seenImg2 from "../assets/img/home/KT.png";
import seenImg3 from "../assets/img/home/GT.png";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 992 }, items: 3 },
  tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const seenIcons = [seenImg1, seenImg2, seenImg3];

const seenLinks = [
  "https://finance.yahoo.com/news/iv-wellness-lounge-announces-luxurious-011500479.html",
  "https://www.khaleejtimes.com/kt-network/iv-wellness-lounge-a-symphony-of-luxurious-wellness-in-dubai",
  "https://www.gulf-times.com/article/670101/qatar/iv-wellness-lounge-unveiling-dubais-premier-wellness-oasis"
];

const gotDetails = [
  "Crow's Feet",
  "Dark Spot",
  "Dullness",
  "Loss of Firmness",
  "Loss of Elasticity",
  "Dryness",
  "Unwanted Hair",
  "Breakouts",
  "Love Handles",
  "Redness",
  "Winter-Bod",
];

const weveGotDetails = [
  "Line & Wrinkle Relaxer",
  "Mesotherapy",
  "Skin Booster",
  "Dermal Filter",
  "Chemical Peel",
  "Laser Hair Removal",
  "Lipo Sculpt",
  "Lipo Zero",
  "Hydrafacial",
];

const Home = () => {
  const [offers, setOffers] = useState([]);
  const carouselRef = useRef();
  const gotDropdownRef = useRef(null);
  const weveDropdownRef = useRef(null);

  const goNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(); // Ensure .next() is available
    }
  };

  const goPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(); // Ensure .previous() is available
    }
  };

  const images = import.meta.glob("../assets/img/offer/*.jpeg", {
    eager: true,
  });
  /* for images including PNG and WebP */

  useEffect(() => {
    const updatedOffer = specialOffersData.specialOffersData.map((offer) => ({
      ...offer,
      img: images[`../assets/img/offer/${offer.img}`]?.default || "",
    }));
    setOffers(updatedOffer);
  }, []);

  const [selectedGot, setSelectedGot] = useState(gotDetails[0]);
  const [got, setGot] = useState(gotDetails.filter((e) => e !== selectedGot));
  const [showGotDropdown, setShowGotDropdown] = useState(false);
  const [selectedWeveGot, setSelectedWeveGot] = useState(weveGotDetails[0]);
  const [weveGot, setWeveGot] = useState(
    weveGotDetails.filter((e) => e !== selectedWeveGot)
  );
  const [showWeveGotDropdown, setShowWeveGotDropdown] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * gotDetails.length);
      setSelectedGot(gotDetails[randomIndex]);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  });

  useEffect(() => {
    setGot(gotDetails.filter((e) => e !== selectedGot));
  }, [selectedGot]);

  useEffect(() => {
    setWeveGot(weveGotDetails.filter((e) => e !== selectedWeveGot));
  }, [selectedWeveGot]);

  useEffect(
    () =>
      selectedGot === gotDetails[0]
        ? setSelectedWeveGot(weveGotDetails[0])
        : selectedGot === gotDetails[1]
        ? setSelectedWeveGot(weveGotDetails[1])
        : selectedGot === gotDetails[2]
        ? setSelectedWeveGot(weveGotDetails[2])
        : selectedGot === gotDetails[3]
        ? setSelectedWeveGot(weveGotDetails[3])
        : selectedGot === gotDetails[4]
        ? setSelectedWeveGot(weveGotDetails[3])
        : selectedGot === gotDetails[5]
        ? setSelectedWeveGot(weveGotDetails[8])
        : selectedGot === gotDetails[6]
        ? setSelectedWeveGot(weveGotDetails[5])
        : selectedGot === gotDetails[7]
        ? setSelectedWeveGot(weveGotDetails[4])
        : selectedGot === gotDetails[8]
        ? setSelectedWeveGot(weveGotDetails[6])
        : selectedGot === gotDetails[9]
        ? setSelectedWeveGot(weveGotDetails[1])
        : selectedGot === gotDetails[10]
        ? setSelectedWeveGot(weveGotDetails[7])
        : null,
    [selectedGot]
  );

  useOutsideClick(gotDropdownRef, () => setShowGotDropdown(false));
  useOutsideClick(weveDropdownRef, () => setShowWeveGotDropdown(false));

  return (
    <>
      <Helmet>
        <title>IV Wellness Lounge | Premium IV Therapy & Aesthetic Services Dubai</title>
      </Helmet>
      <PromoPopup />
      {/* Home Hero */}
      <div className="home-hero">
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
          <source src={ivVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-txt-wrapper">
          <h1>
          Step Inside <span>IV’s</span> <br />
            <span>Aesthetic</span> Sanctuary
          </h1>
          <div className="btn-wrap">
            <Link to="/iv-therapy/drips" className="btn btn-light">
              IV Therapy
            </Link>
            <Link to="/aesthetic" className="btn btn-light">
              Aesthetic
            </Link>
          </div>
          <div className="hero-bar-wrap">
            <div className="hero-bar"></div>
          </div>
        </div>
      </div>

      {/* Home welcome */}
      <div className="home-welcome">
        <div className="container">
          <div className="welcome-wrapper">
            <h1>
              Begin Your <br />
              Wellness & Beauty Journey
            </h1>
            <p>
              IV Wellness Lounge Clinic is a premium wellness lounge providing
              an upscale boutique experience. We provide aesthetic services and
              IV Infusion therapy with proven results, within your means. IV
              Wellness is a space where you can wallow in comfort while we
              provide preventive health and cosmetic solutions. Our lounge is
              elegantly designed to give you the most top-notch services with
              top-rated health care professionals and therapists.
            </p>
            <p>
              IV Wellness Lounge is the place to be if you want be at your best
              inside out.
            </p>
            <div className="btn-wrap">
              <Link to={"/about-us"} className="btn">
                About US
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Home Steps */}
      <div className="home-steps">
        <div className="container">
          <div className="home-step-wrapper">
            <div className="heading-wrap">
              <h1>Special Offers</h1>
              <div className="btn-wrap">
                <Link to={"/offers"} className="btn">
                  Explore Offers
                </Link>
              </div>
            </div>
            <div>
              <Carousel
                ref={(el) => (carouselRef.current = el)}
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                showDots={true}
                pauseOnHover={true}
                arrows={false}
              >
                {offers.map((x, index) => (
                  <div className="card" key={index}>
                    <SpecialOfferCard
                      img={x.img}
                      title={x.title}
                      descBrif={x.desc.brif}
                      descUl={x.desc.ul}
                      newBadge={x.newBadge}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        {/* Custom Arrows Outside Carousel */}
        {/* <div className="custom-arrow-container">
          <button className="custom-arrow left-arrow" onClick={goPrev}>
            <GoChevronLeft />
          </button>
          <button className="custom-arrow right-arrow" onClick={goNext}>
            <GoChevronRight />
          </button>
        </div> */}
      </div>

      {/* Home winter bod */}
      <div className="winter-bod">
        <div className="container">
          <div className="winter-bod-wrapper">
            <div className="left">
              <div className="spin-wrap">
                <img className="spinner-text" src={spinner} alt="spinner" />
                <img className="small-logo" src={smallLogo} alt="small logo" />
              </div>
            </div>
            <div className="right">
              <div>
                <div ref={gotDropdownRef}>
                  <h1>
                    <span>Got</span>
                    <div
                      onClick={() => setShowGotDropdown(!showGotDropdown)}
                      className="select-head"
                    >
                      {selectedGot}
                      <span>
                        <AiFillCaretDown />
                      </span>
                    </div>
                    <span>?</span>
                    <ul className={`${showGotDropdown && "show"}`}>
                      {got.map((x, index) => (
                        <li
                          onClick={() => {
                            setShowGotDropdown(false);
                            setSelectedGot(x);
                          }}
                          key={index}
                        >
                          {x}
                        </li>
                      ))}
                    </ul>
                  </h1>
                </div>
                <div ref={weveDropdownRef}>
                  <h1 className="mt-4 mt-lg-3">
                    <span>We've got</span>
                    <div
                      onClick={() =>
                        setShowWeveGotDropdown(!showWeveGotDropdown)
                      }
                      className="select-head"
                    >
                      {selectedWeveGot}
                      <span>
                        <AiFillCaretDown />
                      </span>
                    </div>
                    <ul className={`${showWeveGotDropdown && "weveShow"}`}>
                      {weveGot.map((x, index) => (
                        <li
                          onClick={() => {
                            setShowWeveGotDropdown(false);
                            setSelectedGot(
                              x === weveGotDetails[0]
                                ? gotDetails[0]
                                : x === weveGotDetails[1]
                                ? gotDetails[1]
                                : x === weveGotDetails[2]
                                ? gotDetails[2]
                                : x === weveGotDetails[3]
                                ? gotDetails[3]
                                : x === weveGotDetails[4]
                                ? gotDetails[5]
                                : x === weveGotDetails[5]
                                ? gotDetails[6]
                                : x === weveGotDetails[6]
                                ? gotDetails[8]
                                : null
                            );
                          }}
                          key={index}
                        >
                          {x}
                        </li>
                      ))}
                    </ul>
                  </h1>
                </div>
              </div>
              <div className="btn-wrap">
                <button className="btn">Explore more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonial">
        <div className="container">
          {/* <Testimonial /> */}
          <div class="elfsight-app-f8470afc-7998-4690-b029-8b07167ad89c" data-elfsight-app-lazy></div>
        </div>
      </div>

      {/* as seen */}
      <div className="as-seen">
        <div className="container">
          <div className="as-seen-wrapper">
            <h1>As Seen On</h1>
            <div className="seen-wrap">
            {seenIcons.map((x, index) => (
                <div className="img-wrap" key={index}>
                  <a href={seenLinks[index]} target="_blank" rel="noopener noreferrer">
                    <img src={x} alt="seen icon" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
