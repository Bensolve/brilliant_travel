"use client";
import React, { useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import '@/components/module.css';
import '@/components/mobileModule.css';
import Slide from '@/components/Slide'; // Import your Slide component

const USA = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const nextButton = document.getElementById('next') as HTMLButtonElement | null;
      const prevButton = document.getElementById('prev') as HTMLButtonElement | null;
      const slideElement = document.getElementById('slide');

      if (nextButton && slideElement) {
        nextButton.onclick = function () {
          let lists = document.querySelectorAll('.item');
          if (lists.length > 0) {
            slideElement.appendChild(lists[0].cloneNode(true));
            slideElement.removeChild(lists[0]);
          }
        };
      }

      if (prevButton && slideElement) {
        prevButton.onclick = function () {
          let lists = document.querySelectorAll('.item');
          if (lists.length > 0) {
            slideElement.insertBefore(lists[lists.length - 1].cloneNode(true), slideElement.firstChild);
            slideElement.removeChild(lists[lists.length - 1]);
          }
        };
      }
    }
  }, []);

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
    },
  ];

  return (
    <section className="my-10">
      <div className="con">
        <div id="slide" className="">
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

export default USA;
