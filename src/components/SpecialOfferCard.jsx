import { useState } from "react";
import { Link } from "react-router-dom";

const SpecialOfferCard = ({ img, title, descBrif, descUl, newBadge }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="specialOffer-card">
      <div className="specialOffer-card__image">
        <img src={img} alt={title} />
        {newBadge && <div className="new-badge">New</div>}
      </div>

      <div className="specialOffer-card__content">
        <div className="specialOffer-card__header" onClick={toggleExpand}>
          <h3 className="specialOffer-card__title">{title}</h3>
          <button className="specialOffer-card__toggle">
            {isExpanded ? "−" : "+"}
          </button>
        </div>

        {isExpanded && (
          <div className="specialOffer-card__details">
            <p>{descBrif}</p>
            {descUl && (
              <ul>
                <ul>
                  {descUl.map((item, index) => (
                    <li key={index}>
                      <p>{item.liTitle}</p>
                      {item.subLi && (
                        <ul>
                          {item.subLi.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <p>{subItem}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </ul>
            )}
            <div className="btn-wrap">
              <Link to={"https://wa.me/97180048482"} className="btn" target="_blank">
                Get Offer
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialOfferCard;
