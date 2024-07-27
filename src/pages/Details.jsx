import { useEffect, useState } from "react";
import { Slides, VirtualTour, DetailsNav } from "../components";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [property, setProperty] = useState(null); // State to store the property data

  useEffect(() => {
    const data = localStorage.getItem('data');

    if (data) {
      try {
        // Parse the JSON string into an array of objects
        const parsedData = JSON.parse(data);

        // Check if parsedData is an array
        if (Array.isArray(parsedData)) {
          // Find the property with the matching _id
          const foundProperty = parsedData.find(item => item._id === id);

          if (foundProperty) {
            setProperty(foundProperty); // Store the found property in state
            console.log(`ID ${id} is found in the data.`);
          } else {
            console.log(`ID ${id} is not found in the data.`);
            setProperty(null); // Clear property if not found
          }
        } else {
          console.error('Parsed data is not an array');
        }
      } catch (error) {
        console.error('Failed to parse data from localStorage', error);
      }
    }
  }, [id]);

  if (!property) {
    return <div>Loading...</div>; // Show a loading message or handle no data case
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
        {property.address.street}, {property.address.townCity}, {property.address.state}
      </h1>

      <Slides img={property.images} />
      <div className="mt-10 w-[100%] h-[100%]">
        <p className="text-gray-700 text-xl lg:text-2xl">Start from</p>
        <h1 className="text-3xl lg:text-4xl font-bold">₹{property.price}/mo*</h1>
        <p className="text-gray-700 text-lg lg:text-xl">
          *Denotes starting price inclusive of taxes. Final prices may vary
          based on room occupancy, customized services, and additional
          attributes.
        </p>
      </div>
      <VirtualTour />
      <DetailsNav />
    </div>
  );
}

export default Details;
