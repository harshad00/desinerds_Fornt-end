import React from "react";
const imageURL =
  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600";
function Hero() {
  return (
    <div>
      <div className=" pt-20 bg-gradient-to-b from-violet-300 to-fuchsia-200 p-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 lg:pr-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Buy, rent, or sell your property easily
            </h1>
            <p className="mb-6 font-normal  sm:font-semibold text-gray-600">
              A great platform to buy, sell, or even rent your properties
              without any commissions.
            </p>

            <div className="flex mt-20 justify-between">
              <div className="text-center">
                <div className="text-blue-600  text-3xl font-bold">50k+</div>
                <div className="text-gray-600 font-semibold text-lg">
                  Renters believe in our service
                </div>
              </div>
              <div className="text-center">
                <div className="text-blue-600 text-3xl font-bold">10k+</div>
                <div className="text-gray-600 font-semibold text-lg">
                  Properties ready for occupancy
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
            <img
              src={imageURL}
              alt="Property"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
