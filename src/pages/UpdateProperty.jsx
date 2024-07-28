import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { addProperty } from '../store/propertySlice'; // Adjust the path as needed
import {
  Button,
  InputBox,
  Heading,
  SubHeading,
  BottomWarning,
  RadioButton,
} from "../components";

const cloudName = import.meta.env.VITE_CLOUD_NAME; // Your Cloudinary cloud name
const Preset = import.meta.env.VITE_PRESET_CLOUD; // Your Cloudinary Preset

const UpdateProperty = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const { id } = useParams(); // Get the property ID from the URL
  const navigate = useNavigate(); // Hook for navigation
  const dispatch = useDispatch();
  const propertyFromRedux = useSelector((state) => state.data); // Adjust based on your Redux state

  const [property, setProperty] = useState({
    type: "Room/Flat", // Default value
    accommodationType: "",
    address: {
      flatOrRoom_no: "",
      apartment: "",
      area: "",
      street: "",
      sector: "",
      landmark: "",
      pincode: "",
      townCity: "",
      state: "",
    },
    title: "",
    description: "",
    bhk: "30",
    area: "24",
    price: "100",
    VRimages: [],
    images: [],
  });

  const [newFields, setNewFields] = useState({
    occupancy: [""],
    services: [""],
    amenities: [""],
    menu: daysOfWeek.map((day) => ({
      day,
      meals: {
        breakfast: [""],
        lunch: [""],
        evening: [""],
        dinner: [""],
      },
    })),
  });

  const handleInputChange = (e, index, field, mealTime = null) => {
    const { value } = e.target;
    if (mealTime) {
      const updatedMeal = [...newFields.menu];
      updatedMeal[index].meals[mealTime] = value.split(", ");
      setNewFields({ ...newFields, menu: updatedMeal });
    } else {
      const updatedFields = [...newFields[field]];
      updatedFields[index] = value;
      setNewFields({ ...newFields, [field]: updatedFields });
    }
  };

  const handlePropertyChange = (e) => {
    const { name, value } = e.target;
    setProperty((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setProperty((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const handleFileChange = async (e, type) => {
    try {
      const files = Array.from(e.target.files);
      const uploadedUrls = await Promise.all(
        files.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", Preset); // Replace with your preset
          formData.append("cloud_name", cloudName); // Replace with your cloud name

          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            formData
          );
          return response.data.secure_url;
        })
      );

      const filteredUrls = uploadedUrls.filter((url) => url !== null);

      // Update state based on the type (images or VRimages)
      if (type === "images") {
        setProperty((prev) => ({ ...prev, images: filteredUrls }));
      } else if (type === "VRimages") {
        setProperty((prev) => ({ ...prev, VRimages: filteredUrls }));
      }
    } catch (error) {
      console.error("Error in handleFileChange:", error);
    }
  };

  const handleImageRemove = (url, type) => {
    setProperty((prev) => ({
      ...prev,
      [type]: prev[type].filter((imageUrl) => imageUrl !== url),
    }));
  };

  const addField = (field) => {
    if (field === "menu" && newFields.menu.length >= 7) return; // Restrict to 7 days
    setNewFields({ ...newFields, [field]: [...newFields[field], ""] });
  };

  const deleteField = (index, field) => {
    const updatedFields = [...newFields[field]];
    updatedFields.splice(index, 1);
    setNewFields({ ...newFields, [field]: updatedFields });
  };

  useEffect(() => {
    const fetchProperty = async () => {
      const yourAuthToken = localStorage.getItem("token");
      try {
        console.log("Fetching property with ID:", id);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/properties/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${yourAuthToken}`, // Replace with your actual token
            },
          }
        );
        console.log("Fetched property data:", response.data);
        setProperty(response.data);
        dispatch(addProperty(response.data)); // Update Redux state with fetched data
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id, dispatch]);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const updatedProperty = { ...property };

    // Push new fields data into property object
    for (const key in newFields) {
      const dataKey = `${key}`;
      if (Array.isArray(newFields[key])) {
        updatedProperty[dataKey] = newFields[key];
      } else {
        updatedProperty[dataKey] = [...property[dataKey], newFields[key]];
      }
    }

    setProperty(updatedProperty);

    try {
      const yourAuthToken = localStorage.getItem("token");
      console.log("Updating property with data:", updatedProperty);
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/properties/${id}`,
        updatedProperty,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${yourAuthToken}`, // Replace with your actual token
          },
        }
      );
      navigate("/success");
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center px-4">
      <div className="flex flex-col justify-center w-full max-w-4xl bg-white rounded-lg p-4 shadow-lg">
        <Heading label={"Update Property"} />
        <SubHeading label={"Enter property details"} />

        <div className="flex flex-col mb-4">
          <InputBox
            name="title"
            value={property.title}
            onChange={handlePropertyChange}
            label={"Property Name"}
            placeholder={"Enter the name of the property"}
          />

          <div className="flex flex-wrap gap-5 my-4">
            <RadioButton
              name="type"
              value="Room/Flat"
              checked={property.type === "Room/Flat"}
              onChange={handlePropertyChange}
              label="Room/Flat"
            />
            <RadioButton
              name="type"
              value="PG"
              checked={property.type === "PG"}
              onChange={handlePropertyChange}
              label="PG"
            />
          </div>

          <InputBox
            name="description"
            value={property.description}
            onChange={handlePropertyChange}
            label={"Detailed Information"}
            placeholder={"Enter detailed information about the property"}
            textarea
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <div className="flex gap-4">
            <RadioButton
              name="accommodationType"
              value="Boys"
              checked={property.accommodationType === "Boys"}
              onChange={handlePropertyChange}
              label="Boys"
            />
            <RadioButton
              name="accommodationType"
              value="Girls"
              checked={property.accommodationType === "Girls"}
              onChange={handlePropertyChange}
              label="Girls"
            />
            <RadioButton
              name="accommodationType"
              value="Both"
              checked={property.accommodationType === "Both"}
              onChange={handlePropertyChange}
              label="Both"
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <InputBox
            name="flatOrRoom_no"
            value={property.address.flatOrRoom_no}
            onChange={handleAddressChange}
            label={"Flat/House No"}
          />
          <InputBox
            name="apartment"
            value={property.address.apartment}
            onChange={handleAddressChange}
            label={"Apartment"}
          />
          <InputBox
            name="area"
            value={property.address.area}
            onChange={handleAddressChange}
            label={"Area"}
          />
          <InputBox
            name="street"
            value={property.address.street}
            onChange={handleAddressChange}
            label={"Street"}
          />
          <InputBox
            name="sector"
            value={property.address.sector}
            onChange={handleAddressChange}
            label={"Sector"}
          />
          <InputBox
            name="landmark"
            value={property.address.landmark}
            onChange={handleAddressChange}
            label={"Landmark"}
          />
          <InputBox
            name="pincode"
            value={property.address.pincode}
            onChange={handleAddressChange}
            label={"Pincode"}
          />
          <InputBox
            name="townCity"
            value={property.address.townCity}
            onChange={handleAddressChange}
            label={"Town/City"}
          />
          <InputBox
            name="state"
            value={property.address.state}
            onChange={handleAddressChange}
            label={"State"}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="block text-sm font-medium text-gray-700">Images</label>
          {property.images.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-4">
              {property.images.map((imgUrl, index) => (
                <div key={index} className="relative">
                  <img src={imgUrl} alt={`Uploaded Image ${index}`} className="w-32 h-32 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => handleImageRemove(imgUrl, "images")}
                    className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, "images")}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="block text-sm font-medium text-gray-700">VR Images</label>
          {property.VRimages.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-4">
              {property.VRimages.map((imgUrl, index) => (
                <div key={index} className="relative">
                  <img src={imgUrl} alt={`VR Image ${index}`} className="w-32 h-32 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => handleImageRemove(imgUrl, "VRimages")}
                    className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, "VRimages")}
          />
        </div>

        {property.type === "PG" && (
          <>
            <h3 className="text-lg font-semibold mb-4">Meal</h3>
            <div className="flex flex-col max-w-xs w-full sm:w-1/2">
              {newFields.menu.map((meal, index) => (
                <div key={index} className="flex flex-col mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    {meal.day}
                  </label>
                  {Object.keys(meal.meals).map((time) => (
                    <div
                      key={time}
                      className="flex flex-col sm:flex-row items-start sm:items-center mb-2"
                    >
                      <InputBox
                        onChange={(e) =>
                          handleInputChange(e, index, "menu", time)
                        }
                        name={`${meal.day}-${time}`}
                        label={time.charAt(0).toUpperCase() + time.slice(1)}
                        placeholder={`Enter ${time} items separated by comma`}
                        value={meal.meals[time].join(", ")}
                        className="flex-1 mb-2 sm:mb-0 outline-box"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}

        <Button label={"Save Changes"} onClick={handleButtonClick} />

        <BottomWarning
          warningText={"Note: Make sure all data is correct before saving changes."}
        />
      </div>
    </div>
  );
};

export default UpdateProperty;
