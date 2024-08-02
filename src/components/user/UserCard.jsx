import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";

function UserCard( {data, type}) {
  console.log(data);
  
  return (
    <div className="m-6 bg-white   rounded-xl sm:w-[40%] shadow-md overflow-hidden lg:w-[23%] h-[60%] ">
      <div className="md:flex w-[100%] flex-col justify-center items-center h-[100%]">
        <div className="md:flex-shrink-0 bg-purple-400/60 rounded-sm w-[100%] flex justify-center">
          <img
            className=" w-24 object-cover  rounded-full m-5 "
            src={data?.photo || 'public/img/userprofile.png'} 
            alt="Profile"
          />
        </div>
        <div className="p-8  text-center font-bold">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
         {data?.name}
          </div>
          <h1 className="text-green-500 ">
            {data?.role}
          </h1>
          <p className="mt-2 text-gray-500 flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp icon URL
              alt="WhatsApp"
              className="h-5 w-5 mr-2"
            />
           {data?.phone}
          </p>
          <p className="mt-2 text-gray-500">{data?.email}</p>
          <p className="mt-2 text-gray-500">{data?.address}</p>
          <Link to={`/UpdateUser/${data?._id}`}>
          <button> Updata yore detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
