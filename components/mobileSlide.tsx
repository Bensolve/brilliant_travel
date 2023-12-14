import React, { useEffect, useRef } from 'react';
import Button from './Button';

interface SlideProps {
  imageUrl: string;
  name: string;
  description: string;

}

const MobileSlide: React.FC<SlideProps> = ({ imageUrl, name, description }) => {



  return (
    <div className="item">
        <div>
            {imageUrl}
        </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="my-5 regular-16">{description}</div>
      </div>
     
      </div>
  );
};

export default MobileSlide;
