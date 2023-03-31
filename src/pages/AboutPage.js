import React, { useState, useEffect } from "react";
import AutoImageSlider from '../components/ImageSlider'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SliderData } from "../components/SliderData";

const AboutPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [monthsOfExperience, setMonthsOfExperience] = useState(0)

  useEffect(() => {
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
    setStartDate(twoYearsAgo);

    const diffInMs = Date.now() - twoYearsAgo.getTime();
    const years = Math.floor(diffInMs / 31536000000); // 31536000000 = number of milliseconds in a year
    const months = Math.floor((diffInMs % 31536000000) / 2628000000); // 2628000000 = number of milliseconds in a month
    setYearsOfExperience(years);
    setMonthsOfExperience(months);
  }, []);

  return (
    <>
      <Header />
      <AutoImageSlider slides={SliderData} />
      <div className="aboutContainer">
        <h2 className="aboutTitle">About Me</h2>
        
        <p className="aboutText" >
          As a frontend developer with a passion for problem-solving, I bring a
          collaborative and detail-oriented approach to every project. With {yearsOfExperience} years and {monthsOfExperience} months of experience learning and applying the latest web development
          technologies, I thrive on designing and developing intuitive and
          visually appealing websites that deliver exceptional user experiences.
        </p>
        <p className="aboutText">
          In addition to my technical skills, I am an outgoing father who loves
          spending time outdoors with my family. Whether it's camping, fishing or
          watching deer, I relish the opportunity to connect with nature and
          make memories with friends and loved ones. I also have a strong entrepreneurial
          spirit and am always seeking new opportunities to innovate and make a
          positive impact.
        </p>
        <p className="aboutText">
          At my previous role as CEO and operator of Small Engine Rehab &
          Repair, I oversaw day-to-day operations, managed a diverse team of
          employees, and optimized marketing and networking efforts throughout
          the local community. I achieved high ratings on platforms such as
          Angieslist and Google, and was recognized for my ability to
          troubleshoot complex issues through cost-effective and efficient
          solutions.
        </p>
        <p className="aboutText">
          With a Full Stack Web & Mobile Development Bootcamp Honors
          certification from NUCAMP and various certifications from
          FreeCodeCamp, I am equipped with the technical proficiencies needed to
          bring your ideas to life. Let's collaborate to create something
          exceptional!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
