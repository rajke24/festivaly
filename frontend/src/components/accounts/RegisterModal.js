import React from "react";
import { FaTimes } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { register } from "../../actions/auth";
import { closeRegisterModal, openLoginModal } from "../../actions/home";
import TextError from "../error-messages/TextError";

const initialValues = {
  username: "",
  email: "",
  password: "",
  password2: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
  password2: Yup.string().oneOf([Yup.ref('password'), ''], "Passwords must match").required("Confirmation required")
});

const RegisterModal = () => {
  const isRegisterModalOpen = useSelector(
    (state) => state.home.isRegisterModalOpen
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      dispatch(closeRegisterModal());
    }
  };

  const handleSubmit = (values) => {
    dispatch(register(values));
    dispatch(closeRegisterModal());
  };

  const switchToLogin = () => {
    dispatch(closeRegisterModal());
    dispatch(openLoginModal());
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div
      className={`modal-overlay ${isRegisterModalOpen && "show-modal-overlay"}`}
      onClick={handleClick}
    >
      <div className={`modal-container ${isRegisterModalOpen && "show-modal"}`}>
        <h3>Register</h3>
        <button
          className="close-btn"
          onClick={() => dispatch(closeRegisterModal())}
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
              <Field type="email" placeholder="Email" name="email" />
              <ErrorMessage name="email" component={TextError} />
            </div>
            <div className="form-group">
              <Field type="password" placeholder="Password" name="password" />
              <ErrorMessage name="password" component={TextError} />
            </div>
            <div className="form-group">
              <Field
                type="password"
                placeholder="Confirm password"
                name="password2"
              />
              <ErrorMessage name="password2" component={TextError} />
            </div>
            <button className="btn submit-btn" type="submit">
              Register
            </button>
            <hr />
            <p className="black">Already have an account?</p>
            <button
              className="btn switch-btn"
              type="button"
              onClick={switchToLogin}
            >
              Sign in
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

RegisterModal.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default RegisterModal;
