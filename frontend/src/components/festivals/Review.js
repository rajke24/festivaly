import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";

import { addLike, addDislike } from "../../actions/reviews";

const Review = ({ id, author, content, date_posted, rating, author_name }) => {
  const likes = useSelector((state) =>
    state.reviews.likes.filter((item) => item.review === id)
  );
  const dislikes = useSelector((state) =>
    state.reviews.dislikes.filter((item) => item.review === id)
  );
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [isLikeFilled, setIsLikeFilled] = useState(false);
  const [isDislikeFilled, setIsDislikeFilled] = useState(false);

  const dispatch = useDispatch();
  const checkAuthor = () => {
    if (!author_name) {
      return user.username;
    }
    return author_name;
  };

  const handleLikeBtn = () => {
    if (!isLikeFilled && isAuthenticated && !isDislikeFilled) {
      const user_id = user.id;
      setIsLikeFilled(true);
      dispatch(addLike({ user: user_id, review: id }));
    }
  };

  const handleDislikeBtn = () => {
    if (!isDislikeFilled && isAuthenticated && !isLikeFilled) {
      const user_id = user.id;
      setIsDislikeFilled(true);
      dispatch(addDislike({ user: user_id, review: id }));
    }
  };

  useEffect(() => {
    if (user) {
      const userFoundLikes = likes.find((like) => like.user === user.id);
      if (userFoundLikes) {
        setIsLikeFilled(true);
      }
    }
  }, [likes]);

  useEffect(() => {
    if (user) {
      const userFoundDislikes = dislikes.find(
        (dislike) => dislike.user === user.id
      );
      if (userFoundDislikes) {
        setIsDislikeFilled(true);
      }
    }
  }, [dislikes]);

  return (
    <article className="review-container">
      <div className="review-info">
        <p>{checkAuthor()}</p>
        <p>{date_posted}</p>
      </div>
      <div className="review-content">
        <ReactStars
          classNames="star-component"
          count={5}
          value={rating}
          color="#FFF"
          activeColor="#eb6028"
          edit={false}
          size={24}
        />
        <p>{content}</p>
      </div>
      <div>
        <button
          className={`social-btn ${!isAuthenticated && "not-allowed"}`}
          onClick={handleLikeBtn}
        >
          {isLikeFilled ? (
            <AiFillLike className="social-icon" />
          ) : (
            <AiOutlineLike className="social-icon" />
          )}
          <span style={{ marginLeft: "5px" }}>{likes ? likes.length : 0}</span>
        </button>
        <button
          className={`social-btn ${!isAuthenticated && "not-allowed"}`}
          onClick={handleDislikeBtn}
        >
          {isDislikeFilled ? (
            <AiFillDislike className="social-icon" />
          ) : (
            <AiOutlineDislike className="social-icon" />
          )}
          <span style={{ marginLeft: "5px" }}>
            {dislikes ? dislikes.length : 0}
          </span>
        </button>
      </div>
    </article>
  );
};

export default Review;
