import React, { useState, useEffect } from "react";
import aestheticData from "../../mocks/aestheticData.json";
import aestheticHero from "../../assets/img/blog/blog-hero.webp";
import HeroSection from "../../components/HeroSection";
import { Link } from "react-router-dom";
import AestheticCard from "../../components/AestheticCard";

const Aesthetic = () => {
  const [aesthetics, setAesthetics] = useState([]);

  const images = import.meta.glob("../../assets/img/aesthetic/*.webp", {
    eager: true,
  });
  const icons = import.meta.glob("../../assets/img/aesthetic/*.png", { eager: true });
  /* for images including PNG and WebP */

  useEffect(() => {
    const updatedAesthetic = aestheticData.aestheticData.map((aesthetic) => ({
      ...aesthetic,
      img: images[`../../assets/img/aesthetic/${aesthetic.img}`]?.default || "",
      treatableConcerns: aesthetic.treatableConcerns.map((concern) => ({
        ...concern,
        icons: icons[`../../assets/img/aesthetic/${concern.icons}`]?.default || "",
      })),
    }));
    setAesthetics(updatedAesthetic);
  }, []);

  return (
    <div className="aesthetic">
      {/* <HeroSection
        textItalic1={"Aesthetic"}
        textLight2={"Services"}
        img={aestheticHero}
      /> */}
      <div className="hero-bottom">
        <div className="container">
          <div className="hero-bottom-wrap">
            <div className="">
              <h1>
                Rediscover Your Natural Beauty <br /> with Our Advanced
                Aesthetic Treatments
              </h1>
              <p>
                At IV Wellness, we believe in enhancing your natural beauty
                through state-of-the-art aesthetic treatments tailored to meet
                your individual needs. Our expert team of licensed practitioners
                is dedicated to helping you look and feel your best in a
                luxurious, relaxing environment.
              </p>
            </div>
            <div className="btn-wrap">
              <Link to={"/booking"} className="btn btn-light-stroke">
                Book Now
              </Link>
              <Link to={"/"} className="btn btn-stroke-white">
                Membership plan
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Cards */}
      <div className="aesthetic-cards">
        <div className="container">
          <div className="aesthetic-wrapper">
            <h2>RECOMMENDED TREATMENTS</h2>
            <div className="aesthetic-wrap">
              {aesthetics.map((x, index) => (
                <div className="card" key={index}>
                  <AestheticCard
                    img={x.img}
                    title={x.title}
                    subHeading={x.subHeading}
                    desc={x.desc}
                    howItWorks={x.howItWorks}
                    treatableArea={x.treatableArea}
                    treatableConcerns={x.treatableConcerns}
                    duration={x.duration}
                    startingAmount={x.startingAmount}
                    discount={x.discount}
                    fullDetailsUrl={x.fullDetailsUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aesthetic;
