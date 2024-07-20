import React from "react";

function VirtualTour() {
  return (
    <div className="mt-10 text-center ">
      <h1 className="font-bold  text-4xl lg:text-4xl">Virtual Tour</h1>
      <div className="flex justify-center mt-8 ">
        <iframe
          className="rounded-lg  w-[100%] sm:w-[80%] h-[400px] "
          src={
            "https://www.youtube.com/embed/HQfYUXpsSTw?" +
            "si=aegIdgGp-_7NcQl2" +
            "&autoplay=1&loop=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}

export default VirtualTour;
