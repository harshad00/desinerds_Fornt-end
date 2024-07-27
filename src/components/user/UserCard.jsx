import React from "react";

function UserCard(type) {
  return (
    <div className="m-6 bg-white   rounded-xl sm:w-[40%] shadow-md overflow-hidden lg:w-[23%] h-[60%] ">
      <div className="md:flex w-[100%] flex-col justify-center items-center h-[100%]">
        <div className="md:flex-shrink-0 bg-purple-400/60 rounded-sm w-[100%] flex justify-center">
          <img
            className="h-24  object-cover  rounded-full m-5 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFntf1FaTnhi0CW2chQT1ZjiQKWdiB12AE-w&s" // Random photo URL from Unsplash
            alt="Profile"
          />
        </div>
        <div className="p-8  text-center font-bold">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Your Name
          </div>
          <h1 className="text-green-500 ">
            {type === "Owner" ? "Owner" : "User"}{" "}
          </h1>
          <p className="mt-2 text-gray-500 flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp icon URL
              alt="WhatsApp"
              className="h-5 w-5 mr-2"
            />
            +1234567890
          </p>
          <p className="mt-2 text-gray-500">email@example.com</p>
          <p className="mt-2 text-gray-500">1234 Example St, City, Country</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
