import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FestivalsList from "../../components/festivals/FestivalsList";
import SearchBar from "../../components/festivals/SearchBar";
import { loadFestivals } from "../../actions/festivals";
import { closeSubmenu } from "../../actions/home";

const AllFestivals = () => {
  const isSubmenuOpen = useSelector((state) => state.home.isSubmenuOpen);
  const allFestivals = useSelector((state) => state.festivals.festivals)
  const dispatch = useDispatch();

  const handleCloseSubmenu = () => {
    if (isSubmenuOpen) {
      dispatch(closeSubmenu());
    }
  };

  useEffect(() => {
    dispatch(loadFestivals());
  }, []);

  return (
    <div className="wrapper-dark" onMouseOver={handleCloseSubmenu}>
      <SearchBar />
      <FestivalsList title="All Festivals" festivals={allFestivals} />
    </div>
  );
};

export default AllFestivals;
