import React from "react";

function Property() {
  const data = [
    {
      name: "Property Insurance",
      p: "Want insurance? Choose us to get more benefits and easy proposal delivery.",
    },
    {
      name: "Best Price",
      p: "Want insurance? Choose us to get more benefits and easy proposal delivery.",
    },
    {
      name: "Lowest Commission",
      p: "Want insurance? Choose us to get more benefits and easy proposal delivery.",
    },
    {
      name: "Overall Control",
      p: "Want insurance? Choose us to get more benefits and easy proposal delivery.",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-center">
      <div
        className="bg-cover p-10 rounded-lg text-center m-10 text-[#100A55] shadow-lg w-11/12 lg:w-96"
        style={{ backgroundImage: "url('../../../src/assets/img.jpeg')" }}
      >
        <h1 className="text-3xl font-bold mb-4">
          The new way to find your new home
        </h1>
        <p className="mb-6">
          Find your dream place to live in with more than 10k+ properties
          listed.
        </p>
        <button className="bg-[#100A55] text-white py-2 px-4 rounded">
          Browse Properties
        </button>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-start w-full lg:w-2/3">
        {data.map((item, index) => (
          <div
            key={index}
            className="shadow-lg p-7 m-5 w-11/12 sm:w-1/2 lg:w-1/3 rounded-lg"
          >
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">{item.name}</h1>
            <p className="text-lg text-[#100A55] font-semibold">{item.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Property;
