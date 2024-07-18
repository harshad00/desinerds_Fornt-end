import React from "react";

import Slides from "../components/details/Slider.jsx";
import VirtualTour from "../components/details/VirtualTour.jsx";
import DetailsNav from "../components/details/DetailsNav.jsx";

function Details() {
  return (
    <div className="w-full lg:w-[90%] mx-auto p-4 h-[100%]">
      <div className="mt-4 flex flex-wrap items-center">
        <h1 className="text-3xl m-3 font-bold">Sendai House</h1>
        <span className="px-2 py-1 m-3 shadow-lg bg-pink-300 text-white font-bold rounded-full">
          Girls
        </span>
      </div>
      <h1 className="ml-3 text-xl lg:text-2xl">
        Sunny, 11/78b, Arakpur Bagh Mochi, Satya Niketan, South Moti Bagh, South
        Campus, Delhi
      </h1>
      //
      <Slides />
      <div className="mt-10 w-[100%] h-[100%]">
        <p className="text-gray-700 text-xl lg:text-2xl">Start from</p>
        <h1 className="text-3xl lg:text-4xl font-bold">₹15,699/mo*</h1>
        <p className="text-gray-700 text-lg lg:text-xl">
          *Denotes starting price inclusive of taxes. Final prices may vary
          based on room occupancy, customized services, and additional
          attributes.
        </p>
      </div>
      <VirtualTour />
      <DetailsNav />
    </div>
  );
}

export default Details;
