import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardComponent from "../components/CardComponent";
// import properties from "./Propaties";
import { Link } from "react-router-dom";
import axios from "axios";

const PropertyListings = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  const isPropertiesRoute = location.pathname === "/properties";

  // State to manage the number of properties displayed and loading state
  const [visibleProperties, setVisibleProperties] = useState(6);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const loadMoreProperties = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProperties((prevCount) => prevCount + 6);
      setLoading(false);
    }, 500); // 500ms debounce
  };

  useEffect(() => {
    const fetchProperties = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/properties`);
      console.log("response", res.data);
      setProperties(res.data);
    } catch (error) {
      console.log(error.message);
    }};
     
    fetchProperties();
  }, []);

  

  return (
    <div className="p-4 lg:w-[90%] mx-auto">
      {isHomeRoute && (
        <>
          <h2 className="mb-4 text-center text-4xl font-bold font-sans">
            Based on your location
          </h2>
          <p className="text-gray-600 mb-4 text-center font-semibold">
            Some of our picked properties near your location.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-4/5 mx-auto">
            {properties.slice(0, visibleProperties).map((property, index) => (
              <CardComponent key={index} props={property} />
            ))}
          </div>

          <Link to={"/properties"}>
            <div className="text-center mt-6">
              <button
                onClick={loadMoreProperties}
                className={`bg-violet-600 text-white px-4 py-2 rounded ${loading ? "animate-pulse" : ""}`}
                disabled={loading}
              >
                {loading ? "Loading..." : "Browse more property"}
              </button>
            </div>
          </Link>
        </>
      )}

      {isPropertiesRoute && (
        <>
          <h2 className="mb-4 text-center text-4xl font-bold font-sans">
            Based on your location
          </h2>
          <p className="text-gray-600 mb-4 text-center font-semibold">
            Some of our picked properties near your location.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-4/5 mx-auto">
            {properties.slice(0, visibleProperties).map((property, index) => (
              <CardComponent key={index} props={property} />
            ))}
          </div>

          {visibleProperties < properties.length && (
            <div className="text-center mt-6">
              <button
                onClick={loadMoreProperties}
                className={`bg-violet-600 text-white px-4 py-2 rounded ${loading ? "animate-pulse" : ""}`}
                disabled={loading}
              >
                {loading ? "Loading..." : "Show more"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PropertyListings;
