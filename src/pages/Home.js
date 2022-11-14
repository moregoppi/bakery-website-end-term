import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/cake1.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Gopi's Bakery </h1>
        <p> THE BAKERY THAT FEEDS THE SOUL.</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
