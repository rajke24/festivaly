import React from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginModal } from "../../actions/home";

const LoginModal = () => {
  const isLoginModalOpen = useSelector((state) => state.home.isLoginModalOpen);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      dispatch(closeLoginModal());
    }
  };

  return (
    <div
      className={`modal-overlay ${isLoginModalOpen && "show-modal-overlay"}`}
      onClick={handleClick}
    >
      <div className={`modal-container ${isLoginModalOpen && "show-modal"}`}>
        <h3>Welcome back.</h3>
        <button
          className="close-btn"
          onClick={() => dispatch(closeLoginModal())}
        >
          <FaTimes />
        </button>
        <form>
          <input type="text" />
          <input type="password" />
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
