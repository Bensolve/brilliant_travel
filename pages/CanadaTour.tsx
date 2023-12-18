import React from 'react';
import '@/components/module.css';
import '@/components/mobileModule.css'
import { ChevronRight, ChevronLeft } from 'lucide-react';
import '@/components/scripts.js';
import Slide from '@/components/Slide'; // Import your Slide component


const  CanadaTour = () => {

  const slidesData = [
    {
      imageUrl: 'canada1.jpg',
      name: '',
      description: '',
    },
    {
      imageUrl: 'canada2.jpg',
      name: '',
      description: '',
    },
    {
      imageUrl: 'canada3.jpg',
      name: '',
      description: '',
    },
    {
      imageUrl: 'canada4.jpg',
      name: '',
      description: '',
    },
    {
      imageUrl: 'canada5.jpg',
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


export default CanadaTour


