import React from "react";

export default function CarouselItem({ image, title }) {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Ensure that the image URL is correctly applied to the src attribute */}
      <img
        className="w-[10rem] h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full object-cover object-center"
        src={image}
        alt={title} // Set alt text for accessibility
      />
      {/* Display the title below the image */}
      <span className="py-5 font-semibold text-xl text-gray-400">{title}</span>
    </div>
  );
}
