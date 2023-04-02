import sunset from "../images/sunset.jpeg";
import React from 'react'
import OrangeResumeButton from "./OrangeResumeButton";


const HeroSection = () => {
  return (
    <>
      <img
        className="heroImage"
        src={sunset}
        alt="A nice sunset in Otis Orchards, WA looking toward Spokane Valley, WA"
      />
      <div>
        <h5 className="heroTitle">Hello, I'm Doug Altermatt</h5>
      </div>
      <div>
        <p className="heroText heroText1">
          As a React developer, I bring a passion for creating engaging and
          intuitive user experiences. I'm currently seeking a new opportunity to
          further my skills and contribute to innovative projects.
        </p>
        <p className="heroText heroText2">
          Thank you for visiting my portfolio. I hope you enjoy browsing
          through it! I'm excited to connect with you and discuss potential
          collaborations on exciting projects. Let's work together to bring our
          ideas to life!
        </p>
        
        <p className="heroText heroText3" >
        Scroll Down to Discover... <OrangeResumeButton />
        </p>
        
      </div>
    </>
  );
};

export default HeroSection;
