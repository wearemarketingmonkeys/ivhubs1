import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import wellnessDrips from "../../assets/img/drips/hero.webp";
import dripsData from "../../mocks/wellnessDrips.json";
import DripsCard from "../../components/DripsCard";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import allIcon from "../../assets/icons/All-Drips.png";
import wellnessIcon from "../../assets/icons/Wellness.png";
import recoveryIcon from "../../assets/icons/Recovery.png";
import beautyIcon from "../../assets/icons/Beauty.png";
import fitnessIcon from "../../assets/icons/Fitness.png";
import nadIcon from "../../assets/icons/NAD.png";


const WellnessDrips = () => {
  const [drips, setDrips] = useState([]);
  const [filteredDrips, setFilteredDrips] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All Drips");
  const carouselRef = useRef(null); // Reference for the carousel// Navigation functions
  
  const categoryIcons = {
    "All Drips": allIcon,
    "Wellness": wellnessIcon,
    "Recovery": recoveryIcon,
    "Beauty": beautyIcon,
    "Fitness": fitnessIcon,
    "NAD+": nadIcon,
  };
  
  
  const goPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };
  
  const goNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  

  // Import all images
  const images = import.meta.glob("../../assets/img/drips/*.webp", {
    eager: true,
  });

  useEffect(() => {
    const updatedDrips = dripsData.dripsData.map((drip) => ({
      ...drip,
      img:
        images[`../../assets/img/drips/${drip.img}`]?.default ||
        images[`../../assets/img/drips/${drip.img}`] ||
        "",
    }));
    setDrips(updatedDrips);
    setFilteredDrips(updatedDrips);
  }, []);

  // Filter function
  const filterDrips = (category) => {
    setActiveFilter(category);
    if (category === "All Drips") {
      setFilteredDrips(drips);
    } else {
      setFilteredDrips(drips.filter((drip) => drip.category === category));
    }
  };

  // Enable Mouse Wheel Scroll for the Carousel
  useEffect(() => {
    const handleWheelScroll = (event) => {
      if (carouselRef.current) {
        event.preventDefault();
        if (event.deltaY > 0) {
          carouselRef.current.next(); // Scroll right
        } else {
          carouselRef.current.previous(); // Scroll left
        }
      }
    };

    const carouselElement = document.querySelector(
      ".react-multi-carousel-list"
    );
    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleWheelScroll);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, []);

  // Carousel settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3, // 3 pairs (6 items total)
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2, // 2 pairs (4 items total)
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1, // 1 pair (2 items total)
      slidesToSlide: 1,
    },
  };

  return (
    <div className="wellness-drips">
      {/* <div className="drips-hero">
        <img src={wellnessDrips} alt="wellness drips" />
        <div className="overlay"></div>
        <div className="container">
          <div className="drips-hero-wrapper">
            <h1>IV Wellness Drips</h1>
            <div className="btn-wrap">
              <Link to={"/booking"} className="btn btn-light">
                Book an Appointment
              </Link>
            </div>
            <p>20% Discount on 3 or more sessions</p>
          </div>
        </div>
      </div> */}

      {/* Filter Menu */}
      <div className="filter-menu">
        <div className="container">
          <div className="filter-menu-wrapper">
            
          {["All Drips", "NAD+", "Wellness", "Recovery", "Beauty", "Fitness"].map((category) => (
              <button
                key={category}
                className={activeFilter === category ? "active" : ""}
                onClick={() => filterDrips(category)}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <img
                  src={categoryIcons[category]}
                  alt={`${category} icon`}
                  style={{ width: "30px", height: "30px", marginBottom: "5px" }}
                />
                {category}
              </button>
            ))}


          </div>
        </div>
      </div>

      <div className="drips-cards">
        <div className="container">
        {/* <Carousel
            ref={carouselRef}
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            keyBoardControl={true}
            customTransition="all 0.5s ease"
            transitionDuration={500}
            arrows={false}
            autoPlay={false}
          >
            {filteredDrips.map((drip, index) => (
              <div className="single-drips-details" key={drip.id}>
                <DripsCard
                  dripsNumber={drip.id}
                  dripsImg={drip.img}
                  title={drip.title}
                  desc={drip.desc}
                  bookBtnUrl={drip.bookingBtn}
                  moreDetailsUrl={drip.moreDetailsUrl}
                  price={drip.price}
                />
              </div>
            ))}
          </Carousel> */}
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            keyBoardControl={true}
            customTransition="all 0.5s ease"
            transitionDuration={500}
            arrows={false}
            autoPlay={false}
          >
            {filteredDrips.reduce((acc, _, index, array) => {
              if (index % 2 === 0) {
                acc.push(
                  <div className="drip-pair" key={index}>
                    {array[index] && (
                      <DripsCard
                        dripsNumber={array[index].id}
                        dripsImg={array[index].img}
                        title={array[index].title}
                        desc={array[index].desc}
                        bookBtnUrl={array[index].bookingBtn}
                        moreDetailsUrl={array[index].moreDetailsUrl}
                        price={array[index].price}
                      />
                    )}
                    {array[index + 1] && (
                      <DripsCard
                        dripsNumber={array[index + 1].id}
                        dripsImg={array[index + 1].img}
                        title={array[index + 1].title}
                        desc={array[index + 1].desc}
                        bookBtnUrl={array[index + 1].bookingBtn}
                        moreDetailsUrl={array[index + 1].moreDetailsUrl}
                        price={array[index + 1].price}
                      />
                    )}
                  </div>
                );
              }
              return acc;
            }, [])}
          </Carousel>
        </div>

{/* Custom Arrows Outside Carousel */}
<div className="custom-arrow-container">
  <button className="custom-arrow left-arrow" onClick={goPrev}>
    <GoChevronLeft />
  </button>
  <button className="custom-arrow right-arrow" onClick={goNext}>
    <GoChevronRight />
  </button>
</div>
      </div>
    </div>
  );
};

export default WellnessDrips;
