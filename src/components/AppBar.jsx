import React from "react";

// flex justify-between
const AppBar = () => {
  return (
    <div className="shadow h-14 flex justify-between items-center ">
      <div className=" ml-4 font-semibold">Your Wallet(Paytm)</div>
      <div className="flex items-center h-full mr-4">
        <div>Hello User</div>
        <div>
          <img
            src="placeholder.png"
            alt="image"
            className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2"
          />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
