import React from "react";
import Hero from "../components/home/Hero";
import LoginModal from "../components/accounts/LoginModal";
import RegisterModal from "../components/accounts/RegisterModal";

const Home = () => {
  return (
    <>
      <Hero />;
      <LoginModal />
      <RegisterModal />
    </>
  );
};

export default Home;
