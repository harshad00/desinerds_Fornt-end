// Amenities.js
import React from "react";

const Amenities = ({ amenities }) => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl lg:text-3xl font-bold m-4">Amenities</h1>
      <div className="flex flex-wrap">
        {amenities.map((item, index) => (
          <h1
            key={index}
            className="m-2 inline-block font-semibold border-black border-2 text-lg lg:text-xl px-2 rounded-full py-1"
          >
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
