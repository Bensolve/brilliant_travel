// SlideCard.tsx

import React from 'react';

type SlideCardProps = {
  image: string;
  alt: string;
  onClick: () => void;
  active: boolean
};

const SlideCard: React.FC<SlideCardProps> = ({ image, alt, onClick , active}) => {
  return (
    <div className="w-12 h-300 bg-gray-300 border border-gray-400 m-1 cursor-pointer overflow-x-auto hide-scrollbar " onClick={onClick}>
      {/* Adjust the size of the image to cover the entire card */}
      <img src={image} alt={alt} className="w-full h-full object-cover scale-125" />
    </div>
  );
};

export default SlideCard;
