import React from 'react';
import { ChevronRight, ChevronLeft } from "lucide-react"

import Image from 'next/image';



const ImageSLider = () => {


  return (
    <section className='h-screen mt-[-50px] w-screen overflow-hidden relative '>
      <div className='w-full h-full absolute inset-0 ' >
        <Image
          src="/img1.jpg"
          alt="Description of your image"
          layout='fill'
          objectFit='cover'
        />

        <div className='absolute top-[20%] left-[50%] w-[1140px] max-w-[80%] transform translate-x-[-50%] pr-[30%] box-border text-white '>
          <div className='text-7xl font-bold '>DESIGN SLIDER</div>
        <div >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, 
          rem magnam nesciunt minima placeat, itaque eum neque officiis unde, 
           
        </div>

        </div>
        </div>

        <div className='absolute bottom-[50px] left-[50%] z-100 flex gap-5' >
          <div className=' w-[150px] h-[220px] relative ' style={{ flexShrink: 0 }}>
          <Image
          src="/img1.jpg"
          alt="Description of your image"
          layout='fill'
          objectFit='cover'
          className='rounded-2xl z-1'
        />
          </div>
          <div className="text-white absolute bottom-[10px] left-[10px] right-[10px]">
                    <div className="font-medium ">
                        Name Slider
                    </div>
                    <div className="font-light">
                        Description
                    </div>
                </div>

        </div>
        <div className="absolute top-[80%] right-[52%] z-100 w-[300px] max-w-[30%] flex gap-[10px] items-center">
          <button id="prev" className='hover:bg-gray-300 w-10 h-10 rounded-full font-bold transition-all duration-500 bg-white pl-2'>  <ChevronLeft className='' /></button>
          <button id="next" className="hover:bg-gray-300 w-10 h-10 rounded-full font-bold transition-all duration-500 bg-white pl-2"><ChevronRight /></button>
        </div>

    </section>



  );
};

export default ImageSLider;