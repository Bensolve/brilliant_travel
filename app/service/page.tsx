"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@/components/Card';
import Header from '@/components/Header';

interface ServiceProps {}

interface ServiceItem {
  imageSrc: string;
  title: string;
  price: number;
}

const Service: React.FC<ServiceProps> = () => {
  const [currentCurrency, setCurrentCurrency] = useState<string>('GHS'); // default currency
  const [exchangeRateUSD, setExchangeRateUSD] = useState<number>(1); // default exchange rate

  useEffect(() => {
    // Fetch exchange rates when the component mounts
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          'https://api.exchangerate-api.com/v4/latest/USD'
          // Replace 'USD' with your base currency code
        );

        setExchangeRateUSD(response.data.rates.GHS); // Set the exchange rate for GHS to USD
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  const services: ServiceItem[] = [
    {
      imageSrc: 'hotel.jpg',
      title: 'Hotel bookings',
      price: 1000, // Assuming the price is in GHS
    },
    {
      imageSrc: 'car.jpg',
      title: 'Car rentals',
      price: 500, // Assuming the price is in GHS
    },
    {
      imageSrc: 'pass.jpg',
      title: 'Passport Express',
      price: 1500, // Assuming the price is in GHS
    },
    {
      imageSrc: 'BirthCert.jpg',
      title: 'Birth Certificate ',
      price: 500, // Assuming the price is in GHS
    },

    {
      imageSrc: 'ghbirthcert.jpg',
      title: ' Ghanaian Birth Certificate ',
      price: 500, // Assuming the price is in GHS
    },
  
    // Add more service items as needed
  ];

  const handleCurrencyChange = () => {
    setCurrentCurrency((prevCurrency) => (prevCurrency === 'GHS' ? 'USD' : 'GHS'));
  };

  return (
    <div className="2xl:max-container padding-container">
      
      <Header 
        prefixText="Our" 
        headerText="Services" 
        descriptionText="What we provide" 
        />
      <div className="flex justify-end mt-4 fixed right-0">
        <button onClick={handleCurrencyChange} className="text-white btn_violet px-2 py-1 rounded">
          {currentCurrency === 'GHS' ? 'USD' : 'GHS'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 py-4 lg:mb-10 lg:py-20 ">
        {services.map((service, index) => (
          <Card
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            price={service.price}
            currentCurrency={currentCurrency}
            exchangeRateUSD={exchangeRateUSD}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
