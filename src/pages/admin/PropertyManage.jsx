import React from 'react';

// Sample properties data
const properties = [
  {
    title: "Spacious 2 BHK Apartment",
    description: "A spacious and well-furnished 2 BHK apartment located in downtown.",
    address: {
      apartment: "Apartment 101",
      area: "Downtown",
      flatOrRoom_no: "Flat 5A",
      landmark: "Near Central Park",
      pincode: "123456",
      sector: "Sector 17",
      state: "New York",
      street: "5th Avenue",
      townCity: "New York City"
    },
    type: "Room/Flat",
    accommodationType: "Both",
    bhk: 2,
    area: "1200 sq.ft.",
    price: 1500,
    amenities: [
      "Wi-Fi",
      "Air Conditioning",
      "Gym"
    ],
    images: [
      "https://via.placeholder.com/150?text=Image1",
      "https://via.placeholder.com/150?text=Image2"
    ],
    VRimages: [
      "https://via.placeholder.com/150?text=VRImage1",
      "https://via.placeholder.com/150?text=VRImage2"
    ],
    popular: true,
    occupancy: [
      "Single",
      "Double"
    ],
    services: [
      "Laundry",
      "Housekeeping"
    ],
    menu: [
      {
        day: "Monday",
        meals: {
          breakfast: ["Pancakes", "Coffee"],
          lunch: ["Sandwich", "Salad"],
          evening: ["Cookies", "Tea"],
          dinner: ["Pizza", "Pasta"]
        }
      }
    ]
  },
  // Add more property objects here
];
const PropertyManage = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Properties</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Title</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Description</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Address</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Type</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Price</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-300">{property.title}</td>
                <td className="py-2 px-4 border-b border-gray-300">{property.description}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {property.address.flatOrRoom_no}, {property.address.apartment}<br />
                  {property.address.street}, {property.address.area}<br />
                  {property.address.townCity}, {property.address.state} - {property.address.pincode}<br />
                  Landmark: {property.address.landmark}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">{property.type}</td>
                <td className="py-2 px-4 border-b border-gray-300">${property.price} per month</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button onClick={() => console.log(`View ${property.title}`)} className="px-2 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600">View</button>
                  <button onClick={() => console.log(`Edit ${property.title}`)} className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 ml-2">Edit</button>
                  <button onClick={() => console.log(`Delete ${property.title}`)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={() => console.log('Add property clicked')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Property</button>
      </div>
    </div>
  );
};

export default PropertyManage;
