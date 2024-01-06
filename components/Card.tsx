// Card.tsx

import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  price: number;
  currentCurrency: string;
  exchangeRateUSD: number;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, price, currentCurrency, exchangeRateUSD }) => {
  const convertedPrice = currentCurrency === 'GHS' ? price : price / exchangeRateUSD;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover object-center" src={imageSrc} alt={title} />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>

        {/* Display the price in the selected currency */}
        <p className="text-gray-600">{`${currentCurrency} ${convertedPrice.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default Card;
