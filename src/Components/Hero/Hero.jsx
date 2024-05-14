import React, { useState, useEffect } from "react";
import "./Hero.css"; // Assuming this is your CSS file
//import arrow_icon from "../Assets/arrow.png";
import sweat1 from "../Assets/hero1.png";
import sweat2 from "../Assets/hero.jpg";
import sweat3 from "../Assets/hero3.png";

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const slides = [
    { image: sweat1, text1: "New Arrivals", text2: "Discover New collections" },
    { image: sweat2, text1: "Fashion Deals", text2: "Deals upto 70% off" },
    { image: sweat3, text1: "BIG SALE", text2: "Don't Miss the Deal " }
  ];

  return (
        <div className="hero-right">
          {slides.map((slide, index) => (
            <div key={index} className={`mySlide ${index === slideIndex ? "active" : ""}`}>
              <img src={slide.image} alt={`Slide ${index}`} />
              <div className="text">{slide.text1}</div>
              <div className="text1">{slide.text2}</div>
            </div>
          ))}
        </div>
  );
};

export default Hero;
