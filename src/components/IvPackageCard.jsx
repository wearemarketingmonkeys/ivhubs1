import { useState } from "react";
import { Link } from "react-router-dom";

const IvPackageCard = ({ img, title, descBrif, descUl, newBadge }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="ivPackage-card">
      <div className="ivPackage-card__image">
        <img src={img} alt={title} />
        {newBadge && <div className="new-badge">New</div>}
      </div>

      <div className="ivPackage-card__content">
        <div className="ivPackage-card__header" onClick={toggleExpand}>
          <h3 className="ivPackage-card__title">{title}</h3>
          <button className="ivPackage-card__toggle">
            {isExpanded ? "−" : "+"}
          </button>
        </div>

        {isExpanded && (
          <div className="ivPackage-card__details">
            {/* <p>{descBrif}</p> */}
            <div dangerouslySetInnerHTML={{ __html: descBrif }} />
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
            {/* <div className="btn-wrap">
              <Link to={"/booking"} className="btn">
                BOOK TREATMENT
              </Link>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default IvPackageCard;
