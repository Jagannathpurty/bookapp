import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Freebook from "../component/Freebook";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Freebook/>

      <Footer />
    </div>
  );
};

export default Home;
