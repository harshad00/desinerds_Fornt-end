import React, { useState } from "react";
import {
  UserCard,
  UserDetails,
  OwnerFeatures,
  ToggleSwitch,
  HostelBooking,
} from "../components";

function User() {
  const [isOwner, setIsOwner] = useState("Owner");

  return (
    <>
      <div className="w-[100%] h-[90%] flex flex-col items-center justify-center mt-[4%]  ">
        <ToggleSwitch type={isOwner} />
        <div className=" w-[100%] h-[100%] flex justify-center items-center sm:flex-col lg:flex-row flex-wrap mx-auto ">
          <UserCard type={isOwner} />
          <UserDetails />
        </div>
        <div>
          <OwnerFeatures />
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <HostelBooking />
      </div>
    </>
  );
}

export default User;
