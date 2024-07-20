import React from "react";

function Menu({ data }) {
  return (
    <div className="flex  w-[60vw] mt-8  ">
      <div className="m-2 border-black border-2 p-2 w-[22%] text-center">
        <div className="border-b-2 border-black  h-20">
          <h1 className="font-bold">Breakfast</h1>
          <p className="text-gray-600 font-semibold">07:30-9:00</p>
        </div>
        {data.breakfast.map((item, index) => {
          return (
            <h1 key={index} className="p-2 border-b-2 h-16 m-2 border-black">
              {item}
            </h1>
          );
        })}
      </div>
      <div className="m-2 border-black border-2 p-2 w-[22%] text-center">
        <div className="border-b-2 border-black  h-20">
          <h1 className="font-bold">Lunch</h1>
          <p className="text-gray-600 font-semibold"> 12:30-14:30</p>
        </div>
        {data.lunch.map((item, index) => {
          return (
            <h1 key={index} className="p-2 border-b-2 h-16 m-2 border-black">
              {item}
            </h1>
          );
        })}
      </div>
      <div className="m-2 border-black border-2 p-2 w-[22%] text-center">
        <div className="border-b-2 border-black  h-20">
          <h1 className="font-bold">Evening Snacks</h1>
          <p className="text-gray-600 font-semibold">16:30 - 17:30</p>
        </div>
        {data.evening.map((item, index) => {
          return (
            <h1 key={index} className="p-2 border-b-2 h-16 m-2 border-black">
              {item}
            </h1>
          );
        })}
      </div>
      <div className="m-2 border-black border-2 p-2 w-[22%] text-center">
        <div className="border-b-2 border-black  h-20">
          <h1 className="font-bold">Dinner</h1>
          <p className="text-gray-600 font-semibold">9:30 - 21:00</p>
        </div>
        {data.dinner.map((item, index) => {
          return (
            <h1 key={index} className="p-2 border-b-2 h-16 m-2 border-black">
              {item}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
