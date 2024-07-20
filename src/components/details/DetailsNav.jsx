import React, { useRef, useState } from "react";
import Menu from "./Menu";
import MoreInfo from "./MoreInfo";
import Day from "./Day";

function DetailsNav() {
  const occupancy = [
    {
      type: "   Single Occupancy",
      rent: "₹21,899/mo*",
    },
    {
      type: "   Double Occupancy",
      rent: "₹15,699/mo*",
    },
    {
      type: "   Double Occupancy",
      rent: "₹15,699/mo*",
    },
    {
      type: "   Double Occupancy",
      rent: "₹15,699/mo*",
    },
    {
      type: "   Double Occupancy",
      rent: "₹15,699/mo*",
    },
  ];
  const Amenities = [
    "Attached Washroom",
    "Attached Washroom",
    "Attached Washroom",
    "Attached Washroom",
    "Spacious Cupboard",
  ];
  const services = [
    "Professional Housekeeping",
    "Laundry Service",
    "High-Speed WIFI",
    "Hot and Delicious Meals",
    "High-Speed WIFI",
    "Hot and Delicious Meals",
  ];
  const data = [
    {
      day: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
      breakfast: [
        "Bread Butter Jam",
        "Live Tea - Cardamom",

        "Masala Uttapam",
        "Milk",
        "Onion & Tomato",
      ],
      lunch: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      evening: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      dinner: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      name: "Day1",
    },

    {
      day: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
      breakfast: [
        "Bread Butter Jam",
        "Live Tea - Cardamom",
        "Live Tea - Cardamom",
        "Masala Uttapam",
        "Milk",
        "Onion & Tomato",
      ],
      lunch: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      evening: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      dinner: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      name: "Day2",
    },
    {
      day: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
      breakfast: [
        "Bread Butter Jam",
        "Live Tea - Cardamom",
        "Live Tea - Cardamom",
        "Masala Uttapam",
        "Milk",
        "Onion & Tomato ",
      ],
      lunch: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      evening: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      dinner: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      name: "Day3",
    },
    {
      day: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
      breakfast: [
        "Bread Butter Jam",
        "Live Tea - Cardamom",
        "Live Tea - Cardamom",
        "Masala Uttapam",
        "Milk",
        "Onion & Tomato ",
      ],
      lunch: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      evening: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      dinner: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      name: "Day4",
    },
    {
      day: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
      breakfast: [
        "Bread Butter Jam",
        "Live Tea - Cardamom",
        "Live Tea - Cardamom",
        "Masala Uttapam",
        "Milk",
        "Onion & Tomato ",
      ],
      lunch: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      evening: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      dinner: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      name: "Day5",
    },
    {
      day: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
      breakfast: [
        "Bread Butter Jam",
        "Live Tea - Cardamom",
        "Live Tea - Cardamom",
        "Masala Uttapam",
        "Milk",
        "Onion & Tomato ",
      ],
      lunch: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      evening: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      dinner: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      name: "Day6",
    },
    {
      day: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
      breakfast: [
        "Bread Butter Jam",
        "Live Tea - Cardamom",
        "Live Tea - Cardamom",
        "Masala Uttapam",
        "Milk",
        "Onion & Tomato ",
      ],
      lunch: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      evening: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      dinner: [
        "Chapati",
        "Cucumber Raita",
        "Dal-Fry",
        "Green Salad",
        "Plain Rice",
      ],
      name: "Day7",
    },
  ];
  const [menu, setMenu] = useState(data[0]);
  const service = useRef(null);
  const amenities = useRef(null);
  const more = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
  };
  return (
    <div className="m-5 w-[100%] lg:w-[100%] mt-14">
      <div className="shadow-xl ">
        <ul className="flex text-lg lg:text-xl font-bold justify-around flex-wrap">
          <li
            onClick={() => scrollToSection(service)}
            className="m-3 cursor-pointer hover:text-violet-700 hover:border-b-2 hover:border-violet-700 pb-2"
          >
            Occupancy
          </li>
          <li
            onClick={() => scrollToSection(amenities)}
            className="m-3 cursor-pointer hover:text-violet-700 hover:border-b-2 hover:border-violet-700 pb-2"
          >
            Amenities
          </li>
          <li
            onClick={() => scrollToSection(more)}
            className="m-3 cursor-pointer hover:text-violet-700 hover:border-b-2 hover:border-violet-700 pb-2 border-b-2 border-white"
          >
            Details
          </li>
        </ul>
      </div>

      <div ref={service} className="mt-8  ">
        <h1 className="text-2xl lg:text-3xl font-bold">
          Available Occupancies
        </h1>
        <div className="flex flex-wrap mt-4">
          {occupancy.map((i, index) => {
            return (
              <div
                key={index}
                className={` w-[80%] md:w-1/2 lg:w-1/4 m-2 rounded-lg  ${
                  index % 2 === 0 ? "bg-purple-300" : "bg-pink-300"
                }`}
              >
                <div className="rounded-xl shadow-lg text-center p-4">
                  <h1 className="text-lg font-bold lg:text-xl text-gray-700">
                    {i.type}
                  </h1>
                  <h2 className="text-xl lg:text-2xl font-bold">{i.rent}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div ref={amenities} className="mt-8 ">
        <h1 className="text-2xl lg:text-3xl font-bold m-4">Amenities</h1>
        <div className="flex flex-wrap ">
          {Amenities.map((item, index) => (
            <h1
              key={index}
              className="m-2 inline-block font-semibold border-black border-2 text-lg lg:text-xl px-2 rounded-full py-1"
            >
              {item}
            </h1>
          ))}
        </div>
      </div>

      <div ref={more} className="mt-8">
        <h1 className="text-2xl lg:text-3xl font-bold  m-4">Services</h1>
        <div className="flex flex-wrap ">
          {services.map((item, index) => (
            <h1
              key={index}
              className="m-2 inline-block font-semibold border-black border-2 text-lg lg:text-xl px-2 rounded-full py-1 text-center"
            >
              {item}
            </h1>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-2xl lg:text-3xl font-bold">Food Menu</h1>
        <div className="flex flex-wrap">
          <Day data={data} setMenu={setMenu} />
          <Menu data={menu} />
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-2xl lg:text-3xl font-bold">More Info</h1>
        <MoreInfo />
      </div>
    </div>
  );
}

export default DetailsNav;
