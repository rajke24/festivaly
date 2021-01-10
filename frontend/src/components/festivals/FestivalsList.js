import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";

import Festival from "./Festival";
import { loadFestivals } from "../../actions/festivals";

const FestivalsList = () => {
  const dispatch = useDispatch();
  const { isLoading, festivals } = useSelector((state) => state.festivals);

  useEffect(() => {
    dispatch(loadFestivals());
  }, []);

  if (isLoading) {
    return (
      <section className="section-center" style={{marginTop: "10rem"}}>
        <Loader
          type="Audio"
          color="#fffbf0"
          height="150"
          width="150"
        />
        ;
      </section>
    );
  }
  if (festivals.length === 0) {
    return <h2 className="section-title">No festivals match your search</h2>;
  }

  return (
    <section className="section section-black">
      <h1 className="section-title">all festivals</h1>
      <div className="underline"></div>
      {festivals.map((festival) => {
        return (
            <Festival key={festival.id} {...festival} />
        );
      })}
    </section>
  );
};

export default FestivalsList;
