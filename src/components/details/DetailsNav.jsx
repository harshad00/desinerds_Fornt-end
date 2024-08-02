/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import Menu from "./Menu";
import MoreInfo from "./MoreInfo";
import Occupancy from "./Occupancy";
import Amenities from "./Amenities";
import Services from "./Services";

function DetailsNav({ occupancyData, amenitiesData, servicesData, menu, type }) {
  const serviceRef = useRef(null);
  const amenitiesRef = useRef(null);
  const moreRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <div className="m-5 w-[100%] lg:w-[100%] mt-14">
      <div className="shadow-xl">
        <ul className="flex text-lg lg:text-xl font-bold justify-around flex-wrap">
          <li
            onClick={() => scrollToSection(serviceRef)}
            className="m-3 cursor-pointer hover:text-violet-700 hover:border-b-2 hover:border-violet-700 pb-2"
          >
            Occupancy
          </li>
          <li
            onClick={() => scrollToSection(amenitiesRef)}
            className="m-3 cursor-pointer hover:text-violet-700 hover:border-b-2 hover:border-violet-700 pb-2"
          >
            Amenities
          </li>
          <li
            onClick={() => scrollToSection(moreRef)}
            className="m-3 cursor-pointer hover:text-violet-700 hover:border-b-2 hover:border-violet-700 pb-2 border-b-2 border-white"
          >
            Details
          </li>
        </ul>
      </div>

      <div ref={serviceRef}>
        <Occupancy occupancy={occupancyData} />
      </div>
      <div ref={amenitiesRef}>
        <Amenities amenities={amenitiesData} />
      </div>
      <div ref={moreRef}>
        <Services services={servicesData} />
      </div>

     { type === "PG" && <div className="mt-8">
        <h1 className="text-2xl lg:text-3xl font-bold">Food Menu</h1>
        <div className="flex flex-wrap">
          <Menu menu={menu} />
        </div>
      </div>
}
      <div className="mt-8">
        <h1 className="text-2xl lg:text-3xl font-bold">More Info</h1>
        <MoreInfo />
      </div>
    </div>
  );
}

export default DetailsNav;
