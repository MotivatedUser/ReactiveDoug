import React from "react";
import sunset from "../images/sunset.jpeg";

const HeroSection = () => {
  return (
    <>
      <img
        className="heroImage"
        src={sunset}
        alt="Sun shining under a rock bridge"
      />
      <div>
        <h5 className="heroTitle">Hello, I'm Doug Altermatt</h5>
    
      </div>
      <div>
        <p className="heroText">
          As a React developer, I bring a passion for creating engaging and
          intuitive user experiences. I'm currently seeking a new opportunity to
          further my skills and contribute to innovative projects.
         </p> 
        <p className="heroText2">
        Thank you for visiting my portfolio. I hope you're enjoying browsing through it! I'm excited to connect with you and discuss potential collaborations on exciting projects. Let's work together to bring our ideas to life!
        </p>
      </div>
      
    </>
  );
};

export default HeroSection;
