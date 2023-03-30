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
      </div>
      <div>
        <p className="heroText2">
          Thank you for taking the time to visit my portfolio. I look forward to
          connecting with you and exploring how we can collaborate on exciting
          projects!
        </p>
      </div>
    </>
  );
};

export default HeroSection;
