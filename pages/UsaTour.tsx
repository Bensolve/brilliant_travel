import React from 'react';
import '@/components/module.css';
import '@/components/mobileModule.css'
import { ChevronRight, ChevronLeft } from 'lucide-react';
import '@/components/scripts.js';
import Slide from '@/components/Slide'; // Import your Slide component


const  UsaTour = () => {

  const slidesData = [
    {
      imageUrl: 'usa1.jpg',
      name: '',
      description: '',
    },
    {
      imageUrl: 'usa2.jpg',
      name: '',
      description: '',
    },
    {
      imageUrl: 'usa3.jpg',
      name: '',
      description: '',
    },
    {
      imageUrl: 'usa4.jpg',
      name: '',
      description: '',
    },
    {
      imageUrl: 'usa5.jpg',
      name: '',
      description: '',
    }
  ];

  return (
    <section className=" my-10">
      <div className="con ">
        <div id="slide" className=''>
          {slidesData.map((slide, index) => (
            <Slide key={index} {...slide} />
          ))}
        </div>
        <div className="buttons flex justify-center gap-4">
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


export default UsaTour


