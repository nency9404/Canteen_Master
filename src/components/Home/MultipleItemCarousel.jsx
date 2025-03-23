import React from "react";
import Slider from 'react-slick'; 
import { topMeals } from "../../data/topMeals"; // Import topMeals data
import CarouselItem from "./CarouselItem"; // Import CarouselItem component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MultipleItemCarousel() {
  // Settings for the Slider component
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return (
    <div>
      {/* Slider component with settings */}
      <Slider {...settings}>
        {topMeals.map((item) => 
          <div key={item.title}>
            <CarouselItem image={item.image} title={item.title} />
          </div>
        )}
      </Slider>
    </div>
  );
}
