/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios"; // Ensure axios is imported
import {
  UserCard,
  UserDetails,
  OwnerFeatures,
  HostelBooking,
} from "../components";
import Cookies from "js-cookie";
function User() {
  const [isOwner, setIsOwner] = useState();

  const [data, setData] = useState();

  const token = Cookies.get("token");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Response:", response.data);
        setData(response.data);
        setIsOwner(response.data.role);
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchProperties();
  }, [token]);

  return (
    <>
      <div className="w-full h-[90%] flex flex-col items-center justify-center mt-[4%]">
        {/* <ToggleSwitch type={isOwner ? "Owner" : "User"} onChange={handleToggle} /> */}
        <div className="w-full h-full flex justify-center items-center sm:flex-col lg:flex-row flex-wrap mx-auto">
          <UserCard type={isOwner ? "Owner" : "User"} data={data} />
          <UserDetails />
        </div>

        {(isOwner && <OwnerFeatures />) || ""}
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        {(isOwner && <HostelBooking />) || ""}
      </div>
    </>
  );
}

export default User;
