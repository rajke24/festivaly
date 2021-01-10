import React from "react";
import { FaTimes } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { login } from "../../actions/auth";
import { closeLoginModal, openRegisterModal } from "../../actions/home";
import TextError from "../error-messages/TextError";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Field required")
    .min(6, "Password must be at least 6 characters")
});

const LoginModal = () => {
  const isLoginModalOpen = useSelector((state) => state.home.isLoginModalOpen);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      dispatch(closeLoginModal());
    }
  };

  const handleSubmit = (values) => {
    dispatch(login(values));
    dispatch(closeLoginModal());
  };

  const switchToRegister = () => {
    dispatch(closeLoginModal());
    dispatch(openRegisterModal());
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-group">
              <Field type="text" placeholder="Username" name="username" />
              <ErrorMessage name="username" component={TextError} />
            </div>

            <div className="form-group">
              <Field type="password" placeholder="Password" name="password" />
              <ErrorMessage name="password" component={TextError} />
            </div>
            <button className="btn submit-btn" type="submit">
              Login
            </button>
            <hr />
            <p className="black">Don't have an account?</p>
            <button
              className="btn switch-btn"
              type="button"
              onClick={switchToRegister}
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

LoginModal.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default LoginModal;
