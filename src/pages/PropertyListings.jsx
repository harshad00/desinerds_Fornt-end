import { useState } from 'react';
import CardComponent from '../components/CardComponent';
import Searchbar from '../components/Searchbar';

const properties = [
  {
    price: "$2,095/month",
    title: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    baths: 2,
    area: "5x7 m²",
    img: "https://i.pinimg.com/564x/4f/34/19/4f3419b7e4a4725f50104e5d930fbe5b.jpg",
    popular: true,
  },
  {
    price: "$2,700/month",
    title: "Beverly Springfield",
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    beds: 4,
    baths: 2,
    area: "6x7.5 m²",
    img: "https://i.pinimg.com/564x/4f/34/19/4f3419b7e4a4725f50104e5d930fbe5b.jpg",
    popular: true,
  },
  {
    price: "$4,550/month",
    title: "Faulkner Ave",
    address: "909 Woodland St, Michigan, IN",
    beds: 4,
    baths: 3,
    area: "8x10 m²",
    img: "https://i.pinimg.com/564x/4f/34/19/4f3419b7e4a4725f50104e5d930fbe5b.jpg",
    popular: true,
  },
  {
    price: "$4,550/month",
    title: "Faulkner Ave",
    address: "909 Woodland St, Michigan, IN",
    beds: 4,
    baths: 3,
    area: "8x10 m²",
    img: "https://i.pinimg.com/564x/4f/34/19/4f3419b7e4a4725f50104e5d930fbe5b.jpg",
    popular: true,
  },
  {
    price: "$4,550/month",
    title: "Faulkner Ave",
    address: "909 Woodland St, Michigan, IN",
    beds: 4,
    baths: 3,
    area: "8x10 m²",
    img: "https://i.pinimg.com/564x/4f/34/19/4f3419b7e4a4725f50104e5d930fbe5b.jpg",
    popular: true,
  },
  {
    price: "$4,550/month",
    title: "Faulkner Ave",
    address: "909 Woodland St, Michigan, IN",
    beds: 4,
    baths: 3,
    area: "8x10 m²",
    img: "https://i.pinimg.com/564x/4f/34/19/4f3419b7e4a4725f50104e5d930fbe5b.jpg",
    popular: true,
  },
  
  // Add more properties as needed
];

const PropertyListings = () => {
  const [visibleProperties, setVisibleProperties] = useState(3);

  const showMoreProperties = () => {
    setVisibleProperties((prevVisibleProperties) => prevVisibleProperties + 3);
  };

  return (
    <div className="p-4 lg:w-[90%] mx-auto">
      <h2 className=" mb-4 text-center text-4xl font-bold font-sans">Based on your location</h2>
      <p className="text-gray-600 mb-4 text-center font-semibold">Some of our picked properties near your location.</p>
      <div className='flex justify-between flex-wrap w-[80%] mx-auto text-center'>
        <div className="flex space-x-4 mb-6  px-10 ">
          <button className="bg-violet-600 text-white px-4 py-2 rounded">Rent</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Buy</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Sell</button>
        </div>
      <div className='ml-auto'>
        <Searchbar/>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-4/5 mx-auto">
        {properties.slice(0, visibleProperties).map((property, index) => (
          <CardComponent key={index} props={property}/>
        ))}
      </div>
      {visibleProperties < properties.length && (
        <div className="text-center mt-6">
          <button className="bg-violet-600 text-white px-4 py-2 rounded" onClick={showMoreProperties}>
            Browse more property
          </button>
        </div>
      )}
    </div>
  );
}

export default PropertyListings;
