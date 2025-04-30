import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ img, title, desc, readMoreUrl }) => {
  return (
    <div className="articleWrap">
      <div className="content">
        <img src={img} alt="article img" />
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <Link to={readMoreUrl}>Read article</Link>
    </div>
  );
};

export default ArticleCard;
