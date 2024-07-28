import React, { useState } from "react";

function ToggleSwitch({ isOwner }) {
  return (
    <div className=" items-center justify-center inline-block ml-[80%]">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-semibold text-black">
          {isOwner === "Owner" ? "Owner" : "User"}
        </span>
        <div
          className={`${
            isOwner === "Owner" ? "bg-green-500" : "bg-blue-400"
          } relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer`}
        >
          <span
            className={`${
              isOwner ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </div>
      </div>
    </div>
  );
}

export default ToggleSwitch;
