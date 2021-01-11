import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ReviewPanel from "./ReviewPanel";
import { loadFestival } from "../../actions/festivals";
import { loadFestivalReviews, loadLikes, loadDislikes } from "../../actions/reviews";

const Festival = ({ id, name, description, img_url, reviews, rating }) => {
  const [readMore, setReadMore] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [reviewsBtnClicked, setReviewsBtnClicked] = useState(false);

  const dispatch = useDispatch();
  
  const handleReviewsClick = () => {
    if (!reviewsBtnClicked) {
      dispatch(loadFestivalReviews(id));
      dispatch(loadLikes(id))
      dispatch(loadDislikes(id))
      setReviewsBtnClicked(true);
    }
    setShowReviews(!showReviews);
  };

  return (
    <article className="single-element">
      <div className="image-container">
        <Link
          to={`/festivals/festival/${id}`}
          onClick={() => dispatch(loadFestival(id))}
        >
          <img src={img_url} alt="" />
          <div className="more-info">
            <h4>more info</h4>
          </div>
        </Link>
      </div>

      <header>
        <div className="element-info">
          <h4>{name}</h4>
          <ReactStars
            classNames="star-component"
            count={5}
            value={rating}
            color="#FFF"
            activeColor="#eb6028"
            edit={false}
            size={24}
            isHalf={true}
          />
        </div>
        <p>
          {readMore || description.length < 300
            ? description
            : `${description.substring(0, 300)}...`}
          {description.length >= 300 && (
            <button className="show-btn" onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "read more"}
            </button>
          )}
        </p>
      </header>
      <button className="reviews-btn" onClick={handleReviewsClick}>
        Reviews
      </button>
      {showReviews && (
        <footer>
          <ReviewPanel festival_id={id} reviews={reviews} />
        </footer>
      )}
    </article>
  );
};

export default Festival;
