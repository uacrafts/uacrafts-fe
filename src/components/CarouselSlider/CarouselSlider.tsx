import React, { useState } from "react";
import styles from "./CarouselSlider.module.scss";

interface CarouselSliderProps {
  photos: string[];
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1,
    );
  };

  const selectSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.bigPhoto}>
        <img src={photos[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <div className={styles.navigation}>
        <svg
          onClick={prevSlide}
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="17.6247"
            transform="rotate(-180 18 18)"
            fill="white"
            stroke="#B8CBC9"
            strokeWidth="0.750581"
          />
          <path
            d="M19.9004 12L13.863 18L19.9004 24"
            stroke="#627C7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          onClick={nextSlide}
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="17.6247"
            fill="white"
            stroke="#B8CBC9"
            strokeWidth="0.750581"
          />
          <path
            d="M16.0996 24L22.137 18L16.0996 12"
            stroke="#627C7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles.previews}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Slide ${index}`}
            className={currentIndex === index ? styles.active : ""}
            onClick={() => selectSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
