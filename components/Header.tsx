import React from 'react';

interface HeaderProps {
  prefixText: string;
  headerText: string;
  descriptionText: string;
}

const Header: React.FC<HeaderProps> = ({ prefixText, headerText, descriptionText }) => {
  return (
    <header className="text-center py-8">
      <h2 className="text-4xl font-bold my-2">{prefixText} <span className="text-violet-600">{headerText}</span></h2>
      <p>{descriptionText}</p>
    </header>
  );
}

export default Header;


// const Header = ({}) => {
//     return (
//       <header className="text-center py-8">
//         <h2 className="text-4xl font-bold">Explore Exciting <span className="text-violet-600">Destinations</span></h2>
//       </header>
//     );
//   }
  
//   export default Header;
  