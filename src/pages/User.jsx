import React, { useState } from "react";
import {
  UserCard,
  UserDetails,
  OwnerFeatures,
  ToggleSwitch,
  HostelBooking,
} from "../components";

function User() {
  const [isOwner, setIsOwner] = useState(false); // Toggle between true (Owner) and false (User)

  const handleToggle = () => {
    setIsOwner((prev) => !prev); // Toggle the state
  };

  return (
    <>
      <div className="w-full h-[90%] flex flex-col items-center justify-center mt-[4%]">
        <ToggleSwitch type={isOwner ? "Owner" : "User"} onChange={handleToggle} />
        <div className="w-full h-full flex justify-center items-center sm:flex-col lg:flex-row flex-wrap mx-auto">
          <UserCard type={isOwner ? "Owner" : "User"} />
          <UserDetails />
        </div>
        {isOwner && (
          <div>
            <OwnerFeatures />
          </div>
        )}
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <HostelBooking />
      </div>
    </>
  );
}

export default User;
