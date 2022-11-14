import React from "react";
import MultiplePizzas from "../assets/cake6.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to homemade. What does homemade mean to you? Is it something you cook or make for your family or the time with family or smells that build the memories? When I started this homemade baking business in April of 2012, it was with the idea that everything would be made from scratch.  Mainly because of my own memories in the kitchen of cooking with my family. Coming from a big family, everything was made from scratch so never in a million years did I imagined how much fun I was going to have baking for my community.  When I say baked from scratch, I mean that I use basic ingredients from start to finish. I make buttercream frosting with real butter and our custom cakes, cinnamon rolls, and cookies made completely from scratch with farm-fresh local eggs and real butter. If you have questions about any ingredient please feel free to ask. 
        </p>
      </div>
    </div>
  );
}

export default About;
