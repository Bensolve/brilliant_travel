// Card.tsx

import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
      <img className="w-full h-48 object-cover object-center" src={imageSrc} alt={title} />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">₵{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
