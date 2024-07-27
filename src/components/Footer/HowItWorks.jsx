import React from 'react';

const HowItWorks = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">How It Works</h2>
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">1</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Search for Flats</h3>
            <p className="text-gray-600">
              Browse through a wide variety of PGs and flats available near your location. Use our filters to find the perfect place that meets your needs.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">2</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">View Details</h3>
            <p className="text-gray-600">
              Check out detailed information about each flat, including photos, amenities, pricing, and availability.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">3</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Take a Virtual Tour</h3>
            <p className="text-gray-600">
              Experience the property without leaving your home through our virtual tours. Get a real sense of the place before you visit.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">4</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Book a Visit</h3>
            <p className="text-gray-600">
              Schedule a visit to the flat at your convenience. Our team will assist you in booking a visit and answering any questions you may have.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">5</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">No Brokerage Charges</h3>
            <p className="text-gray-600">
              Enjoy a hassle-free experience with zero brokerage charges. We ensure a transparent process with no hidden fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
