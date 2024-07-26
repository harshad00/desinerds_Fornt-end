import React from "react";
import { hobbies } from "./data";

function UserDetails() {
  return (
    <div className="lg:w-[60%] w-[60%] text-center lg:text-left flex justify-center flex-col h-[40%] ">
      <div className="w-[80%]  ">
        <h1 className="text-3xl text-[#100A55] font-bold my-4">About John</h1>
        <p className="text-lg ">
          Party People and Pups unite! i love the chasing beats ,spoiling my
          dog,and good times at the pub up for a chat or dance.
        </p>
      </div>
      <div className="mt-8 w-[80%] ">
        <h1 className="text-3xl text-[#100A55]  lg:text-3xl font-bold  m-4">
          Hobbies
        </h1>
        <div className="flex flex-wrap  justify-center items-center ">
          {hobbies.map((item, index) => (
            <h1
              key={index}
              className="m-4 inline-block font-semibold border-black border-2 text-lg lg:text-xl px-2 rounded-full py-1 text-center"
            >
              {item}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
