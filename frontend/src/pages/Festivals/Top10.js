import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FestivalsList from "../../components/festivals/FestivalsList";
import { closeSubmenu } from "../../actions/home";
import { loadTopFestivals } from "../../actions/festivals";

const Top10 = () => {
  const isSubmenuOpen = useSelector((state) => state.home.isSubmenuOpen);
  const mostPopularFestivals = useSelector((state) => state.festivals.topFestivals);
  const dispatch = useDispatch();

  const handleCloseSubmenu = () => {
    if (isSubmenuOpen) {
      dispatch(closeSubmenu());
    }
  };

  useEffect(() => {
    dispatch(loadTopFestivals());
  }, []);

  return (
    <div className="wrapper-dark" onMouseOver={handleCloseSubmenu} style={{paddingTop: "2rem"}}>
      <FestivalsList title="Most Popular Festivals" festivals={mostPopularFestivals} />
    </div>
  );
};

export default Top10;
