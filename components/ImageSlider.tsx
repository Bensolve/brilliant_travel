// MyComponent.js

import React from 'react';
import  './module.css';
import {  ChevronRight, ChevronLeft } from "lucide-react"
import './scripts.js';




const ImageSLider = () => {
  // Your component logic here
  
  return (
  <section className = " my-10  ">
       <div className="container ">
      <div id="slide">
        <div className="item" style={{ backgroundImage: "url(ghana1.jpg)" }}>
          <div className="content">
            <div className="name">Kakum National Park - Ghana</div>
            <div className="des"></div>
           
          </div>
        </div>
        <div className="item" style={{ backgroundImage: "url(ghana2.jpg)" }}>
          <div className="content">
            <div className="name">Mole National Park - Ghana</div>
            <div className="des"></div>
        
          </div>
        </div>
        <div className="item" style={{ backgroundImage: "url(3.jpg)" }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
           
          </div>
        </div>
        <div className="item" style={{ backgroundImage: "url(4.jpg)" }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
        
          </div>
        </div>
        <div className="item" style={{ backgroundImage: "url(5.jpg)" }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
           
          </div>
        </div>
        <div className="item" style={{ backgroundImage: "url(back3.jpg)" }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
           
          </div>
        </div>
      </div>
      <div className="buttons">
        <button id="prev" className='text-white icon-button '>  <ChevronLeft className='' /></button>
      
        <button id="next"   className="text-white icon-button"><ChevronRight /></button>
      
      
      </div>
    </div>
  </section>
   
  );
};

export default ImageSLider;