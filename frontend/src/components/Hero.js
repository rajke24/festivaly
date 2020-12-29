import React from "react";
import { useDispatch } from "react-redux";
import { closeSubmenu } from "../actions/home";

const Hero = () => {
  const dispatch = useDispatch();

  return (
    <section className="hero" onMouseOver={() => dispatch(closeSubmenu())}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Welcome <br />
            to your world of music!
          </h1>
          <p className="paragraphs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            tempore voluptatibus in tenetur aliquid corrupti non blanditiis nemo
            necessitatibus labore veritatis magni, vitae enim beatae itaque sit
            aspernatur? Qui dolorum excepturi consectetur ducimus recusandae
            mollitia incidunt at, velit eius error!
          </p>
          <button className="btn">Jump in</button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
