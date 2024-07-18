import React, { useState } from "react";

function Day({ data, setMenu }) {
  const [color, setColor] = useState("Day1");
  return (
    <div className="m-2 border-black border-2 p-2 w-[16%]  mt-9 text-center">
      <div className="border-b-2 border-black  h-20">
        <h1 className="font-bold">Days</h1>
        <p className="text-gray-600 font-semibold">Mon-Sun</p>
      </div>
      {data[0].day.map((item, index) => {
        return (
          <h1
            onClick={() => {
              setMenu(data[index]);
              setColor(item);
              console.log(color);
            }}
            className={
              (color == item
                ? "bg-purple-600 text-white animate-pulse "
                : "bg-white text-black") +
              "   border-b-2 border-black h-16 m-2 cursor-pointer rounded-lg px-2 flex items-center justify-center align-middle text-center  w-[90%] "
            }
            key={index}
          >
            {item}
          </h1>
        );
      })}
    </div>
  );
}

export default Day;
