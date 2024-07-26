import React, { useState } from "react";
import UserCard from "../components/user/UserCard";
import UserDetails from "../components/user/UserDetails";
import OwnerFeatures from "../components/user/OwnerFeatures";
import ToggleSwitch from "../components/user/ToggleSwitch";

function User() {
  const [isOwner, setIsOwner] = useState("User");
  return (
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
  );
}

export default User;
