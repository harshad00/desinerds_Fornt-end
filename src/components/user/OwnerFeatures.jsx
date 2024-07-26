import React from "react";
import { data } from "./data";

function OwnerFeatures() {
  return (
    <div className="w-[100%] mt-5 ">
      <h1 className="text-3xl font-bold text-center text-[#100A55]">
        Owner Features
      </h1>
      <div className="w-[80%] mx-auto mt-10 mb-10 flex flex-col md:flex-row ">
        {data.map((item, index) => {
          return (
            <div
              className={`flex mb-10 h-60 w-[95%] lg:h-40 md:w-1/2 lg:w-5/12 rounded-xl p-1 mr-10 ${
                index % 2 === 0
                  ? " bg-violet-900  text-white  "
                  : "bg-purple-600 text-white"
              }`}
            >
              <img
                className="mt-20 md:mt-9 h-10 w-10 mx-1"
                src={item.url}
                alt="hjbfljbv"
              />
              <div className="my-auto px-6">
                <h1 className="font-bold text-lg">{item.text}</h1>
                <p className="text-sm opacity-85 mt-2 ">{item.p}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OwnerFeatures;
