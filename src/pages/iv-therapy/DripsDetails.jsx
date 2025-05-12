import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import dripsData from "../../mocks/wellnessDrips.json";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 991, min: 660 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 659, min: 0 },
    items: 2,
  },
};

// 3D Tilt Card Component using Framer Motion
const TiltCard = ({ children }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const bounds = cardRef.current.getBoundingClientRect();
    const xPos = (e.clientX - bounds.left) / bounds.width - 0.5;
    const yPos = (e.clientY - bounds.top) / bounds.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: "spring", stiffness: 150, damping: 20 });
    animate(y, 0, { type: "spring", stiffness: 150, damping: 20 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 2000,
        transformStyle: "preserve-3d",
        padding: "12px",
        minHeight: "100%",
        height: "100%",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          padding: "24px",
          minHeight: "100%",
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const DripsDetails = () => {
  const { dripsName } = useParams();
  const [singleDrips, setSingleDrips] = useState([]);

  const images = import.meta.glob("../../assets/img/drips/*.webp", {
    eager: true,
  });
  const icons = import.meta.glob("../../assets/img/drips/*.png", {
    eager: true,
  }); /* for image */

  useEffect(() => {
    const fetchSingleDrips = () => {
      const updatedSingleDrips = dripsData.dripsData.map((drip) => ({
        ...drip,
        img: images[`../../assets/img/drips/${drip.img}`]?.default || "",
        benifitImg:
          images[`../../assets/img/drips/${drip.benifitImg}`]?.default || "",
        benifitList: Array.isArray(drip.benifitList)
          ? drip.benifitList.map((benefit) => ({
              ...benefit,
              icon:
                icons[`../../assets/img/drips/${benefit.icon}`]?.default || "",
            }))
          : [], 
      }));
      setSingleDrips(updatedSingleDrips);
    };

    fetchSingleDrips();
  }, []);

  const data = singleDrips.find(
    (item) => item.moreDetailsUrl === `/iv-therapy/drips/${dripsName}`
  );

  if (!data) {
    return <div>Drips not found.</div>;
  }

  return (
    <div className="drips-details">
      <div className="details-hero">
        <div className="container">
          <div className="details-wrap">
            <div className="left">
              <img src={data?.img} alt={data?.title} />
            </div>
            <div className="right">
              <h1>{data?.title}</h1>
              <h2>
                <i>AED {data?.price}</i>
              </h2>
              <div className="para">
                <p>{data?.para1}</p>
                <br />
                <p>{data?.para2}</p>
                <br />
                <p>{data?.para3}</p>
                <br />
                <p>{data?.para4}</p>
                <br />
                <p>{data?.para5}</p>
                <br />
                <p>{data?.para6}</p>
              </div>
              <p className="discount">
                Offers: <br />
                <span>{data?.discount}% discount on 3 or more sessions.</span>
                <Link to="/explore-us/offers">Explore more offers</Link>
              </p>
              <div className="btn-wrap">
                <Link to="{data?.bookingBtn}" className="btn">
                  Book Now
                </Link>
                <Link to="/iv-therapy/drips" className="btn btn-stroke">
                  Explore other drips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="benifit">
        <div className="container">
          <div className="benifit-wrap">
            {/* <div className="left">
              <img src={data?.benifitImg} alt={data?.title} />
            </div> */}
            <div className="right">
              <h1>{data?.benifitTitle}</h1>
              <ul className="benifit-item">
                {data.benifits?.map((x, index) => (
                  <li key={index}>{x}</li>
                ))}
              </ul>
              <div className="benifit-list">
                {data.benifitList?.map((x, index) => (
                  <div className="single-list" key={index}>
                    <img src={x.icon} alt={x.txt} />
                    <p>{x.txt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="drips-extras">
        <div className="container-fluid">
          <Carousel
            responsive={responsive}
            arrows={false}
            showDots={false}
            autoPlay
            infinite
            sliderClass="drips-extras-wrap"
          >
            {data?.extraData.map((x, index) => (
              <TiltCard key={index}>
                <div className="extra-data-card">
                  <h2>{x.name}</h2>
                  <p>{x.txt}</p>
                </div>
              </TiltCard>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default DripsDetails;
