import React, { useState, useEffect } from 'react';
import "../css/Common.css";
import banner_img0 from '../images/banner_0.jpeg';
import banner_img1 from '../images/banner_1.jpeg';
import banner_img2 from '../images/banner_2.jpeg';
import banner_img3 from '../images/banner_3.jpeg';
import image_121 from "../images/image_121.jpeg";
import image_122 from "../images/image_122.jpeg";

// Array of images for the slider
const images = [banner_img0, banner_img1,banner_img2,banner_img3];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to change image
    const changeImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set interval to change image every 3 seconds (3000ms)
    const intervalId = setInterval(changeImage, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Functions to handle manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="banner_wrapper">
      <button className="control_btn prev" onClick={handlePrev}>◀</button>
      <img src={images[currentIndex]} alt="Banner" />
      <button className="control_btn next" onClick={handleNext}>▶</button>
    </div>
  );
};

export default Banner;