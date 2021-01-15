import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CgArrowLongLeft } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

import { loadFestival } from "../../actions/festivals";
import { closeSubmenu } from "../../actions/home";

const SingleFestival = () => {
  const festival = useSelector((state) => state.festivals.detailedFestival);
  const dispatch = useDispatch();
  const isSubmenuOpen = useSelector((state) => state.home.isSubmenuOpen);
  const isLoading = useSelector((state) => state.festivals.isLoading);
  const history = useHistory();

  const handleCloseSubmenu = () => {
    if (isSubmenuOpen) {
      dispatch(closeSubmenu());
    }
  };

  if (isLoading) {
    return (
      <section className="section-center" style={{ marginTop: "10rem" }}>
        <Loader type="Audio" color="#fffbf0" height="150" width="150" />;
      </section>
    );
  }

  return (
    <div className="festival-wrapper" onMouseOver={handleCloseSubmenu}>
      <div className="festival-info">
        <div className="back-arrow" onClick={() => history.goBack()}>
          <CgArrowLongLeft className="arrow-icon" />
          <span>back</span>
        </div>
        <h1>{festival.name}</h1>
        <h4 style={{ marginLeft: "6px" }}>
          {`${festival.start_date}` + " - " + `${festival.end_date}`}
        </h4>
        <h4
          style={{ marginLeft: "6px", fontWeight: "300" }}
        >{`${festival.city}, ${festival.country}`}</h4>
        <div className="festival-description">
          <p>{festival.description}</p>
        </div>
        <div className="festival-categories">
          <h4>Categories: </h4>
          <p>{festival.category}</p>
        </div>
      </div>
      <div className="festival-image">
        <img src={festival.img_url} alt="" />
      </div>
    </div>
  );
};

export default SingleFestival;
