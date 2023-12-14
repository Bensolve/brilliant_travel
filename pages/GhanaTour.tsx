// MyComponent.js
import React from 'react';
import '@/components/mobileSlide.jsx';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import '.@/components/scripts.js';
import Slide from '@/components/Slide';

const Ghanatour = () => {
  const slidesData = [
    {
      imageUrl: 'ghana1.jpg',
      name: 'Kakum National Park - Ghana',
      description: '',
    },
    {
      imageUrl: 'ghana2.jpg',
      name: 'Mole National Park - Ghana',
      description: '',
    },
    {
      imageUrl: '3.jpg',
      name: 'LUNDEV',
      description: '',
    },
    {
      imageUrl: '4.jpg',
      name: 'LUNDEV',
      description: '',
    },
    {
      imageUrl: '5.jpg',
      name: 'LUNDEV',
      description: '',
    },
    {
      imageUrl: 'back3.jpg',
      name: 'Hello',
      description: '',
    },
  ];

  return (
    <section className=" ">
      <div className="container ">
        <div id="slide" className=''>
          {slidesData.map((slide, index) => (
            <Slide key={index} {...slide} />
          ))}
        </div>
        <div className="buttons">
          <button id="prev" className="text-white icon-button">
            <ChevronLeft className="" />
          </button>
          <button id="next" className="text-white icon-button">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ghanatour;
