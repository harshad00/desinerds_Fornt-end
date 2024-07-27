// Occupancy.js
import React from "react";

const Occupancy = ({ occupancy }) => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl lg:text-3xl font-bold">Available Occupancies</h1>
      <div className="flex flex-wrap mt-4">
        {occupancy.map((item, index) => (
          <div
            key={index}
            className={`w-[80%] md:w-1/2 lg:w-1/4 m-2 rounded-lg ${
              index % 2 === 0 ? "bg-purple-300" : "bg-pink-300"
            }`}
          >
            <div className="rounded-xl shadow-lg text-center p-4">
              <h1 className="text-lg font-bold lg:text-xl text-gray-700">
                {item.type}
              </h1>
              <h2 className="text-xl lg:text-2xl font-bold">{item.rent}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Occupancy;
