// Details.tsx

import React, { useEffect, useRef } from 'react';

type DetailProps = {
  title: string;
  description: string;
};

const Detail: React.FC<DetailProps> = ({ title, description }) => {
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
            const textColor = brightness > 128 ? 'text-gray-800' : 'text-white';

            detailRef.current.classList.add(textColor);
          }
        }
      }
    };

    calculateAverageColor();
  }, []);

  return (
    <div ref={detailRef} className=" max-w-[300px]  overflow-ellipsis ">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="">{description}</p>
    </div>
  );
};

export default Detail;

// Details.tsx






