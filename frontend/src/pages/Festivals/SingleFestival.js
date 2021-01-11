import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CgArrowLongLeft } from "react-icons/cg";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { loadFestival } from "../../actions/festivals";
import { closeSubmenu } from "../../actions/home";

const SingleFestival = () => {
  const festival = useSelector((state) => state.festivals.detailedFestival);
  const dispatch = useDispatch();
  const isSubmenuOpen = useSelector((state) => state.home.isSubmenuOpen);
  const history = useHistory();

  const handleCloseSubmenu = () => {
    if (isSubmenuOpen) {
      dispatch(closeSubmenu());
    }
  };

  return (
    <div className="festival-wrapper" onMouseOver={handleCloseSubmenu}>
      <div className="festival-info">
        <div className="back-arrow" onClick={() => history.goBack()}>
          <CgArrowLongLeft className="back-arrow-icon" />
          <span>back</span>
        </div>
        <h1>{festival.name}</h1>
        <h4 style={{ marginLeft: "6px" }}>
          {`${festival.start_date}`.substring(0, 10) +
            " - " +
            `${festival.end_date}`.substring(0, 10)}
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
