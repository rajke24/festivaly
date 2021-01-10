import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1 style={{marginBottom:"3rem"}}>Oops it's a dead end...</h1>
        <Link to="/" className="btn back-home-btn">Back home</Link>
      </div>
    </section>
  );
};

export default Error;
