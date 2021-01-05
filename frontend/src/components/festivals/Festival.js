import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Festival = ({name, description, img_url}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-element">
      <img
        src={img_url}
        alt=""
      />
      <footer>
        <div className="element-info">
          <h4>{name}</h4>
          <ReactStars
            classNames="star-component"
            count={5}
            value={3}
            color="#FFF"
            activeColor="#eb6028"
            edit={false}
            size={24}
          />
        </div>
        <p>
          {readMore || description.length < 300
            ? description
            : `${description.substring(0, 300)}...`}
          {description.length >= 300 && (
            <button className="show-btn" onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "  read more"}
            </button>
          )}
        </p>
      </footer>
      <button className="reviews-btn">Reviews</button>
    </article>
  );
};

export default Festival;
