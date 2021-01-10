import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";

import Festival from "./Festival";

const FestivalsList = ({title, festivals}) => {
  const dispatch = useDispatch();
  const isLoading  = useSelector((state) => state.festivals.isLoading);

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
      <h1 className="section-title">{title}</h1>
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
