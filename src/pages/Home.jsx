import React, { useState } from 'react';

// URL of the image to be used
const imageURL = 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600';

// SVG Icons (You can replace these with your actual SVGs or use a library)
const RentIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
  </svg>
);

const BuyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6m0 4v6m4-6h6M6 20v-6m4 6v-6"></path>
  </svg>
);

const SellIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-4.553a4 4 0 00-5.656-5.656L4 10.879V16h5.121l6.879-6.879a4 4 0 015.656 5.656L19 14m-4 6h.01"></path>
  </svg>
);

const PropertyComponent = () => {
  const [activeButton, setActiveButton] = useState('Rent');

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div className=" pt-20 bg-gradient-to-b from-violet-300 to-fuchsia-200 p-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:pr-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Buy, rent, or sell your property easily</h1>
          <p className="mb-6 font-normal  sm:font-semibold text-gray-600">A great platform to buy, sell, or even rent your properties without any commissions.</p>
          <div className="  p-4 rounded-lg mb-6">
            <div className="flex gap-2 mx-2   md:justify-between mb-7">
              <button
                onClick={() => handleButtonClick('Rent')}
                className={`flex items-center font-semibold px-2 sm:px-3 hover:scale-105 py-1 sm:py-2 border rounded-lg ${activeButton === 'Rent' ? 'text-blue-600 border-blue-600' : 'text-gray-600 border-gray-600'}`}
              >
                <RentIcon />
                <span className="ml-2">Rent</span>
              </button>
              <button
                onClick={() => handleButtonClick('Buy')}
                className={`flex items-center font-semibold px-2 sm:px-3 hover:scale-105  py-1 sm:py-2 border rounded-lg ${activeButton === 'Buy' ? 'text-blue-600 border-blue-600' : 'text-gray-600 border-gray-600'}`}
              >
                <BuyIcon />
                <span className="ml-2">Buy</span>
              </button>
              <button
                onClick={() => handleButtonClick('Sell')}
                className={`flex items-center  font-semibold px-2 sm:px-3  hover:scale-105 py-1 sm:py-2 border rounded-lg ${activeButton === 'Sell' ? 'text-blue-600 border-blue-600' : 'text-gray-600 border-gray-600'}`}
              >
                <SellIcon />
                <span className="ml-2">Sell</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row mb-4">
              <input type="text" placeholder="Location" className="p-2 rounded-lg border flex-1 mb-2 sm:mb-0 sm:mr-2" />
              <input type="date" placeholder="Select Move-in Date" className="p-2 rounded-lg border flex-1" />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Browse Properties</button>
          </div>
          <div className="flex justify-between">
            <div className="text-center">
              <div className="text-blue-600  text-xl font-bold">50k+</div>
              <div className="text-gray-600 font-semibold text-lg">Renters believe in our service</div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-xl font-bold">10k+</div>
              <div className="text-gray-600 font-semibold text-lg">Properties ready for occupancy</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
          <img src={imageURL} alt="Property" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
   </div>
  );
};

export default PropertyComponent;
