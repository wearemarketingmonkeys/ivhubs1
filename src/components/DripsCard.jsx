import React from "react";
import { Link } from "react-router-dom";

const DripsCard = ({
  dripsImg,
  title,
  desc,
  bookBtnUrl,
  moreDetailsUrl,
  dripsNumber,
  price,
}) => {
  return (
    <div className="single-drips-details">
      <div className="img-box">
        <img src={dripsImg} alt={title} />
        {/* <span>AED {price}</span> */}
      </div>
      <div className="wrap">
        <div className="left">
          
          <Link to={moreDetailsUrl}>
          <h1>{title}</h1>
          </Link>
        <Link to={moreDetailsUrl} className="btn btn-stroke">
         {/* Know More */}
         AED {price}
        </Link>
        </div>
          <p>{desc}</p>
      </div>
      {/* <div className="left">
        <div className="left-top">
          <h1>{dripsNumber}</h1>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="btn-wrap">
          <Link to={bookBtnUrl} className="btn">
            Book An Appointment
          </Link>
        </div>
      </div>
      <div className="right">
        <img src={dripsImg} alt={title} />
      </div> */}
    </div>
  );
};

export default DripsCard;
