// MyComponent.js
import React from 'react';
import './module.css';
import './mobileModule.css'
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './scripts.js';
import Slide from './Slide'; // Import your Slide component

const SlideCard = () => {
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
    <section className=" my-10">
      <div className="con ">
        <div id="slide" className=''>
          {slidesData.map((slide, index) => (
            <Slide key={index} {...slide} />
          ))}
        </div>
        <div className="buttons">
          <button id="prev" className="text-white icon-left icon-button">
            <ChevronLeft className="" />
          </button>
          <button id="next" className="text-white icon-right icon-button">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SlideCard;
