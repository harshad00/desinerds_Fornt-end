import { useEffect, useState } from "react";
import { Slides, VirtualTour, DetailsNav } from "../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Details() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // setFetching(true);
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/properties/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = res.data;
        setProperty(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProperties();
  }, [id, token]);

  if (!property) {
    return <div className=" w-full  text-center text-2xl ">Loading...</div>;
  }

  return (
    <div className="w-full lg:w-[90%] mx-auto p-4 h-[100%]">
      <div className="mt-4 flex flex-wrap items-center">
        <h1 className="text-3xl m-3 font-bold">{property.title}</h1>
        <span className="px-2 py-1 m-3 shadow-lg bg-pink-300 text-white font-bold rounded-full">
          {property.accommodationType}
        </span>
      </div>
      <h1 className="ml-3 text-xl lg:text-2xl">
        {property.address.street}, {property.address.townCity},{" "}
        {property.address.state}
      </h1>

      <Slides img={property.images} />
      <div className="mt-10 w-[100%] h-[100%]">
        <p className="text-gray-700 text-xl lg:text-2xl">Start from</p>
        <h1 className="text-3xl lg:text-4xl font-bold">
          ₹{property.price}/mo*
        </h1>
        <p className="text-gray-700 text-lg lg:text-xl">
          {property.description}
        </p>
      </div>
      <VirtualTour />
      <DetailsNav
        occupancyData={property.occupancy}
        amenitiesData={property.amenities}
        servicesData={property.services}
        menu={property.menu}
        type={property.type}
      />
    </div>
  );
}

export default Details;
