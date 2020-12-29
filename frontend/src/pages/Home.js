import React from "react";
import Hero from "../components/Hero";
import LoginModal from "../components/accounts/LoginModal";

const Home = () => {
  return (
    <>
      <Hero />;
      <LoginModal />
    </>
  );
};

export default Home;
