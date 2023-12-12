// ImageSlider.tsx

import React, { useState, useEffect } from 'react';
// import './script'; // Make sure your script.js file is in the same directory

const New: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const images = [
    'url(back1.jpg)',
    'url(back2.jpg)',
    'url(back3.jpg)',
    'url(back4.jpg)',
   
  ];

  return (
    <section className="2xl:max-container padding-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 ">
         <div className="" style={{ backgroundColor: '#eaeaea', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '1000px', height: '600px', padding: '50px', backgroundColor: '#f5f5f5', boxShadow: '0 30px 50px #dbdbdb' }}>
        <div id="slide" style={{ width: 'max-content', marginTop: '50px' }} className="flex overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`item w-full h-full bg-cover bg-center relative ${
                index === currentIndex ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-500`}
              style={{
                backgroundImage: image,
                width: '200px',
                height: '300px',
                backgroundPosition: '50% 50%',
                display: 'inline-block',
                transition: '0.5s',
                backgroundSize: 'cover',
                position: 'absolute',
                zIndex: 1,
                top: '50%',
                transform: 'translate(0,-50%)',
                borderRadius: '20px',
                boxShadow: '0 30px 50px #505050',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-lg font-bold">LUNDEV</div>
                  <div className="text-sm">
                    Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
                  </div>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-full mt-2">
                    See more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <button onClick={prevSlide} className="bg-gray-800 p-2 rounded-full text-white">
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button onClick={nextSlide} className="bg-gray-800 p-2 rounded-full text-white">
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
    </section>
   
  );
};

export default New;
