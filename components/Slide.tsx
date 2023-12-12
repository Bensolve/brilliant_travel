import React, { useEffect, useRef } from 'react';
import Button from './Button';

interface SlideProps {
  imageUrl: string;
  name: string;
  description: string;
  nthChild?: number;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ imageUrl, name, description, nthChild, isActive }) => {
  const getSlideClasses = (index?: number) => {
    switch (index) {
      case 1:
      case 2:
        return 'left-0 top-28 transform translate-x-0 translate-y-0 rounded-none w-full h-full shadow-none';
      case 3:
        return 'left-1/2 -translate-x-1/2';
      case 4:
        return 'left-auto translate-x-1/2 ml-[440px]';
      case 5:
        return 'left-auto translate-x-1/2 ml-[890px]';
      case 6:
        return 'left-auto translate-x-1/2 ml-[1350px] opacity-0';
      default:
        return ''; // Add default styles for other items
    }
  };

  const slideClasses = `w-[200px] h-[300px] bg-cover bg-center inline-block transition duration-500 absolute top-2/3 transform -translate-y-1/2 rounded-2xl shadow-2xl ${getSlideClasses(nthChild)}`;
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateAverageColor = () => {
      if (detailRef.current) {
        const image = detailRef.current.closest('.max-container')?.querySelector('img');
        if (image instanceof HTMLImageElement) {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (context) {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0, canvas.width, canvas.height);

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
            let totalR = 0;
            let totalG = 0;
            let totalB = 0;

            for (let i = 0; i < imageData.length; i += 4) {
              totalR += imageData[i];
              totalG += imageData[i + 1];
              totalB += imageData[i + 2];
            }

            const averageR = totalR / (imageData.length / 4);
            const averageG = totalG / (imageData.length / 4);
            const averageB = totalB / (imageData.length / 4);

            const brightness = (averageR * 299 + averageG * 587 + averageB * 114) / 1000;
            const textColorClass = brightness > 128 ? 'text-gray-800' : 'text-white';

            // Apply the textColorClass to the text content inside detailRef
            if (detailRef.current.children.length > 0) {
              const textContent = detailRef.current.children[0];
              if (textContent instanceof HTMLElement) {
                textContent.classList.add(textColorClass);
              }
            }
          }
        }
      }
    };

    calculateAverageColor();
  }, [imageUrl]); // Added imageUrl as a dependency

  return (
    <div className={slideClasses} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div ref={detailRef} className={`absolute top-1/2 left-28 w-[300px] text-left p-0 transform translate-y-[-50%] text-gray-300 ${nthChild !== 2 ? 'hidden' : 'block z-11111'}`}>
        {nthChild === 2 && (
          <>
            <div className="bold-52 text-4xl">{name}</div>
            <div className="my-5 regular-16">{description}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Slide;
