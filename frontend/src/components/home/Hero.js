import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSubmenu, openRegisterModal } from "../../actions/home";

const Hero = () => {
  const dispatch = useDispatch();
  const isSubmenuOpen = useSelector((state) => state.home.isSubmenuOpen);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleCloseSubmenu = () => {
    if (isSubmenuOpen) {
      dispatch(closeSubmenu());
    }
  };

  return (
    <section className="hero" onMouseOver={handleCloseSubmenu}>
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
          {!isAuthenticated && (
            <button
              className="btn home-btn"
              onClick={() => dispatch(openRegisterModal())}
            >
              Jump in
            </button>
          )}
        </article>
      </div>
    </section>
  );
};

export default Hero;
