import React from 'react';
import Card from '@/components/Card';

const Service: React.FC = () => {
  return (
    <div className="2xl:max-container padding-container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 py-4 lg:mb-10 lg:py-20 ">
      <Card
        imageSrc="hotel.jpg"
        title="Hotel reservations"
        price={19.99}
      />
      <Card
        imageSrc="visa.jpg"
        title="Visa assistance"
        price={24.99}
      />
      <Card
        imageSrc="pass.jpg"
        title="Ghana passport assistance"
        price={20.99}
      />
      <Card
        imageSrc="car.jpg"
        title="Car rentals"
        price={54.99}
      />
    </div>
  );
};

export default Service;
