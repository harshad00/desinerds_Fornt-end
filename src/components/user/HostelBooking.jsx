import React, { useState } from "react";

const HostelBooking = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bookingDetails, setBookingDetails] = useState([
    {
      hostelName: "Living Town Hostel",
      bedType: "Single Bed",
      roomFacility: "AC, Bathroom, Laundry, Meals",
      ownerFlag: "Owner",
      bookDate: "Oct 12, 2023",
      bookTime: "5:30 PM",
      bookingStatus: "Booked",
      bookingPeriod: "Oct 12-Nov 12",
    },
    {
      hostelName: "Living Town Hostel",
      bedType: "Single Bed",
      roomFacility: "AC, Bathroom, Laundry, Meals",
      ownerFlag: "Owner",
      bookDate: "Oct 12, 2023",
      bookTime: "5:30 PM",
      bookingStatus: "Booked",
      bookingPeriod: "Oct 12-Nov 12",
    },
    {
      hostelName: "Living Town Hostel",
      bedType: "Single Bed",
      roomFacility: "AC, Bathroom, Laundry, Meals",
      ownerFlag: "Owner",
      bookDate: "Oct 12, 2023",
      bookTime: "5:30 PM",
      bookingStatus: "Booked",
      bookingPeriod: "Oct 12-Nov 12",
    },
  ]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedBookingDetails = bookingDetails.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setBookingDetails(updatedBookingDetails);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] justify-between my-[5%]">
      <div className="flex justify-between items-center mb-4 w-[100%] ">
        <h1 className="text-3xl font-bold text-[#100A55] text-center m-4">
          Booking Details
        </h1>
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={handleEditToggle}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      {bookingDetails.map((booking, index) => (
        <div
          key={index}
          className={`flex items-center mb-4 justify-center text-center border-b-2 border-gray-400 pb-8 flex-col lg:flex-row ${
            isEditing ? "justify-around" : ""
          }`}
        >
          <img
            src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2023/6/1/house-middleclass.jpg.transform/845x440/image.jpg"
            alt="Hostel"
            className={`w-50 lg:40 lg:h-32 h-48 rounded-lg mr-4  ${
              isEditing ? "w-[40%] h-[30%]" : ""
            } `}
          />
          <div
            className={` flex justify-between items-center w-[50%] lg:w-[70%] flex-col lg:flex-row ${
              isEditing ? "flex-col" : "flex-row"
            }`}
          >
            <div className="flex flex-col ">
              {isEditing ? (
                <input
                  type="text"
                  name="hostelName"
                  value={booking.hostelName}
                  onChange={(e) => handleInputChange(index, e)}
                  className={`ml-2 border rounded px-2 py-1`}
                />
              ) : (
                <span className="m-3">{booking.hostelName}</span>
              )}
            </div>
            <div className="flex flex-col">
              {isEditing ? (
                <input
                  type="text"
                  name="bedType"
                  value={booking.bedType}
                  onChange={(e) => handleInputChange(index, e)}
                  className="ml-2 border rounded px-2 py-1"
                />
              ) : (
                <span className="m-3">{booking.bedType}</span>
              )}
            </div>
            <div className="flex flex-col">
              {isEditing ? (
                <input
                  type="text"
                  name="roomFacility"
                  value={booking.roomFacility}
                  onChange={(e) => handleInputChange(index, e)}
                  className="ml-2 border rounded px-2 py-1"
                />
              ) : (
                <span className="m-3">{booking.roomFacility}</span>
              )}
            </div>

            <div className="flex flex-col">
              {isEditing ? (
                <input
                  type="text"
                  name="roomFacility"
                  value={booking.ownerFlag}
                  onChange={(e) => handleInputChange(index, e)}
                  className="ml-2 border rounded px-2 py-1 text-green-500 "
                />
              ) : (
                <span className="m-3">{booking.ownerFlag}</span>
              )}
            </div>
            <div className="flex-row flex">
              {isEditing ? (
                <div className=" flex-col flex">
                  <input
                    type="text"
                    name="bookingStatus"
                    value={booking.bookDate}
                    onChange={(e) => handleInputChange(index, e)}
                    className="ml-2 border rounded px-2 py-1"
                  />
                  <input
                    type="text"
                    name="bookingPeriod"
                    value={booking.bookTime}
                    onChange={(e) => handleInputChange(index, e)}
                    className="ml-2 border rounded px-2 py-1"
                  />
                </div>
              ) : (
                <div className="flex flex-col ">
                  <span className="m-3">{booking.bookDate}</span>
                  <span className="m-3">{booking.bookTime}</span>
                </div>
              )}
            </div>

            <div className="flex-row flex">
              {isEditing ? (
                <div className=" flex-col flex">
                  <input
                    type="text"
                    name="bookingStatus"
                    value={booking.bookingPeriod}
                    onChange={(e) => handleInputChange(index, e)}
                    className="ml-2 border rounded px-2 py-1"
                  />
                  <input
                    type="text"
                    name="bookingPeriod"
                    value={booking.bookingStatus}
                    onChange={(e) => handleInputChange(index, e)}
                    className="ml-2 border rounded px-2 py-1"
                  />
                </div>
              ) : (
                <div className="flex flex-col ">
                  <span className="m-3">{booking.bookingPeriod}</span>
                  <span className="m-3">{booking.bookingStatus}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {isEditing && (
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default HostelBooking;
