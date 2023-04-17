import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const usePreloadImages = (images) => {
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.image;
    });
  }, [images]);
};

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  usePreloadImages(SliderData);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === length - 1 ? 0 : prevCurrent + 1));
    }, 3000);
  
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div className='sliderContainer' key={index}>
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              <img src={slide.image} alt='travel' className='sliderImage' />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
