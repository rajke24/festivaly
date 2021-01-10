import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import Loader from "react-loader-spinner";

import { createReview } from "../../actions/reviews";
import { openLoginModal } from "../../actions/home";
import Review from "./Review";

const ReviewPanel = ({ festival_id }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const festivalReviews = useSelector((state) =>
    state.reviews.festivalReviews.filter(
      (item) => item.festival === festival_id
    )
  );
  const isLoading = useSelector(
    (state) => state.reviews.festivalReviewsLoading
  );

  const addReview = (festival, author, content, rating) => {
    dispatch(
      createReview({
        festival,
        author,
        content,
        rating,
      })
    );
    setText("");
    setRating(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      if (user != null) {
        addReview(festival_id, user.id, text, rating);
      } else {
        dispatch(openLoginModal());
      }
    }
  };

  useEffect(() => {
    if (user != null && text.length > 0) {
      addReview(festival_id, user.id, text, rating);
    }
  }, [user]);

  if (isLoading) {
    return (
      <section className="section-center" style={{ marginTop: "3rem" }}>
        <Loader type="TailSpin" color="#fffbf0" height="80" width="80" />
      </section>
    );
  }

  return (
    <section className="review-panel">
      <form className="review-form">
        <div className="stars-container">
          <p style={{ marginBottom: "0" }}>Rate: </p>
          <ReactStars
            classNames="star-component"
            count={5}
            value={rating}
            color="#FFF"
            activeColor="#eb6028"
            size={24}
            onChange={(newRating) => setRating(newRating)}
          />
        </div>
        <div className="textarea-container">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellcheck="false"
          ></textarea>
        </div>
        <button className="btn submit-btn" type="submit" onClick={handleSubmit}>
          Publish
        </button>
      </form>
      {festivalReviews &&
        festivalReviews.map((review) => {
          return <Review {...review} />;
        })}
    </section>
  );
};

export default ReviewPanel;
