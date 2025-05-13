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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const carouselRef = useRef(null);

  const categoryIcons = {
    "All Drips": allIcon,
    "Wellness": wellnessIcon,
    "Recovery": recoveryIcon,
    "Beauty": beautyIcon,
    "Fitness": fitnessIcon,
    "NAD+": nadIcon,
  };

  // Responsive state for mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goPrev = () => {
    if (carouselRef.current) carouselRef.current.previous();
  };

  const goNext = () => {
    if (carouselRef.current) carouselRef.current.next();
  };

  // Load images
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

  const filterDrips = (category) => {
    setActiveFilter(category);
    if (category === "All Drips") {
      setFilteredDrips(drips);
    } else {
      setFilteredDrips(drips.filter((drip) => drip.category === category));
    }
  };

  useEffect(() => {
    const handleWheelScroll = (event) => {
      if (carouselRef.current) {
        event.preventDefault();
        event.deltaY > 0
          ? carouselRef.current.next()
          : carouselRef.current.previous();
      }
    };

    const carouselElement = document.querySelector(
      ".react-multi-carousel-list"
    );
    if (carouselElement && !isMobile) {
      carouselElement.addEventListener("wheel", handleWheelScroll);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, [isMobile]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="wellness-drips">
      {/* Filter Menu */}
      <div className="filter-menu">
        <div className="container">
          <div className="filter-menu-wrapper">
            {["All Drips", "NAD+", "Wellness", "Recovery", "Beauty", "Fitness"].map((category) => (
              <button
                key={category}
                className={activeFilter === category ? "active" : ""}
                onClick={() => filterDrips(category)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={categoryIcons[category]}
                  alt={`${category} icon`}
                  style={{
                    width: "30px",
                    height: "30px",
                    marginBottom: "5px",
                  }}
                />
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="drips-cards">
        <div className="container">
          {isMobile ? (
            // Stack items for mobile
            filteredDrips.map((drip) => (
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
            ))
          ) : (
            // Carousel for desktop and tablet
            <Carousel
              ref={carouselRef}
              responsive={responsive}
              swipeable={true}
              draggable={true}
              showDots={false}
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
                        <DripsCard {...array[index]} />
                      )}
                      {array[index + 1] && (
                        <DripsCard {...array[index + 1]} />
                      )}
                    </div>
                  );
                }
                return acc;
              }, [])}
            </Carousel>
          )}
        </div>

        {!isMobile && (
          <div className="custom-arrow-container">
            <button className="custom-arrow left-arrow" onClick={goPrev}>
              <GoChevronLeft />
            </button>
            <button className="custom-arrow right-arrow" onClick={goNext}>
              <GoChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WellnessDrips;