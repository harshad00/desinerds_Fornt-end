import { useState } from "react";
import {
  Button,
  InputBox,
  Heading,
  SubHeading,
  BottomWarning,
  RadioButton,
} from "../components";

const AddProperty = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [property, setProperty] = useState({
    occupancy: [],
    amenities: [],
    services: [],
    menu: [],
    images: [],
    type: "Room/Flat", // Default value
    accommodationType: "", //! Added gender field
    address: {
      // Added address field
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
    title: "", // Added property name
    description: "", // Added detailed information
    bhk: "", // ariya of room
    area: "", //
    price: "", //
    VRimages: [],
  });

  const [newFields, setNewFields] = useState({
    occupancy: [""],
    amenity: [""],
    service: [""],
    meal: daysOfWeek.map((day) => ({
      day,
      meals: {
        breakfast: [""],
        lunch: [""],
        evening: [""],
        dinner: [""],
      },
    })),
    imageSrc: [],
  });

  const handleInputChange = (e, index, field, mealTime = null) => {
    const { value } = e.target;
    if (mealTime) {
      const updatedMeal = [...newFields.meal];
      updatedMeal[index].meals[mealTime] = value.split(", ");
      setNewFields({ ...newFields, meal: updatedMeal });
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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setNewFields({ ...newFields, imageSrc: files });
  };

  const addField = (field) => {
    if (field === "meal" && newFields.meal.length >= 7) return; // Restrict to 7 days
    setNewFields({ ...newFields, [field]: [...newFields[field], ""] });
  };

  const deleteField = (index, field) => {
    const updatedFields = [...newFields[field]];
    updatedFields.splice(index, 1);
    setNewFields({ ...newFields, [field]: updatedFields });
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const updatedProperty = { ...property };

    // Push new fields data into property object
    for (const key in newFields) {
      const dataKey = `${key}Data`;
      if (Array.isArray(newFields[key])) {
        updatedProperty[dataKey] = newFields[key];
      } else {
        updatedProperty[dataKey] = [...property[dataKey], newFields[key]];
      }
    }

    setProperty(updatedProperty);

    console.log(updatedProperty);

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/property/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProperty),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
      // Handle success response
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center px-4">
      <div className="flex flex-col justify-center w-full max-w-4xl bg-white rounded-lg p-4 shadow-lg">
        <Heading label={"Add Property"} />
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
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <InputBox
            name="flatOrRoom_no"
            value={property.address.flatOrRoom_no}
            onChange={handleAddressChange}
            label={"Flat/House No"}
            placeholder={"Enter flat/house number"}
          />
          <InputBox
            name="apartment"
            value={property.address.apartment}
            onChange={handleAddressChange}
            label={"Apartment"}
            placeholder={"Enter apartment name"}
          />
          <InputBox
            name="area"
            value={property.address.area}
            onChange={handleAddressChange}
            label={"Area"}
            placeholder={"Enter area"}
          />
          <InputBox
            name="street"
            value={property.address.street}
            onChange={handleAddressChange}
            label={"Street"}
            placeholder={"Enter street"}
          />
          <InputBox
            name="sector"
            value={property.address.sector}
            onChange={handleAddressChange}
            label={"Sector"}
            placeholder={"Enter sector"}
          />
          <InputBox
            name="landmark"
            value={property.address.landmark}
            onChange={handleAddressChange}
            label={"Landmark"}
            placeholder={"Enter landmark"}
          />
          <InputBox
            name="pincode"
            value={property.address.pincode}
            onChange={handleAddressChange}
            label={"Pincode"}
            placeholder={"Enter pincode"}
          />
          <InputBox
            name="townCity"
            value={property.address.townCity}
            onChange={handleAddressChange}
            label={"Town/City"}
            placeholder={"Enter town/city"}
          />
          <InputBox
            name="state"
            value={property.address.state}
            onChange={handleAddressChange}
            label={"State"}
            placeholder={"Enter state"}
          />
        </div>

        <div className="flex flex-wrap gap-5">
          <div className="flex flex-col max-w-xs w-full sm:w-1/2">
            {newFields.occupancy.map((_, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center mb-2"
              >
                <InputBox
                  onChange={(e) => handleInputChange(e, index, "occupancy")}
                  name="occupancy"
                  label={"Occupancy Data"}
                  placeholder={`Single Occupancy, ₹21,899/mo*`}
                  value={newFields.occupancy[index]}
                  className="flex-1 mb-2 sm:mb-0 outline-box" // Added outline-box class
                />
                {newFields.occupancy.length > 1 && (
                  <button
                    className="text-red-500 mt-2 sm:mt-0"
                    onClick={() => deleteField(index, "occupancy")}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                )}
              </div>
            ))}
            <div className="w-40">
              <Button
                label={"Add Occupancy"}
                onClick={() => addField("occupancy")}
                className="w-full outline-box" // Added outline-box class
              />
            </div>
          </div>

          <div className="flex flex-col max-w-xs w-full sm:w-1/2">
            {newFields.amenity.map((_, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center mb-2"
              >
                <InputBox
                  onChange={(e) => handleInputChange(e, index, "amenity")}
                  name="amenity"
                  label={"Amenities Data"}
                  placeholder={`Enter amenity, Enter amenity`}
                  value={newFields.amenity[index]}
                  className="flex-1 mb-2 sm:mb-0 outline-box" // Added outline-box class
                />
                {newFields.amenity.length > 1 && (
                  <button
                    className="text-red-500 mt-2 sm:mt-0"
                    onClick={() => deleteField(index, "amenity")}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                )}
              </div>
            ))}
            <div className="w-40">
              <Button
                label={"Add Amenity"}
                onClick={() => addField("amenity")}
                className="w-full outline-box" // Added outline-box class
              />
            </div>
          </div>

          <div className="flex flex-col max-w-xs w-full sm:w-1/2">
            {newFields.service.map((_, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center mb-2"
              >
                <InputBox
                  onChange={(e) => handleInputChange(e, index, "service")}
                  name="service"
                  label={"Services Data"}
                  placeholder={`Enter service, Enter service`}
                  value={newFields.service[index]}
                  className="flex-1 mb-2 sm:mb-0 outline-box" // Added outline-box class
                />
                {newFields.service.length > 1 && (
                  <button
                    className="text-red-500 mt-2 sm:mt-0"
                    onClick={() => deleteField(index, "service")}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                )}
              </div>
            ))}
            <div className="w-40">
              <Button
                label={"Add Service"}
                onClick={() => addField("service")}
                className="w-full outline-box" // Added outline-box class
              />
            </div>
          </div>
        </div>
        
        {/* // !  meal */}
        <h3> Meal</h3>
        {property.type === "PG" && (
          <div className="flex flex-col max-w-xs w-full sm:w-1/2">
            {newFields.meal.map((meal, index) => (
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
                        handleInputChange(e, index, "meal", time)
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
        )}

        <div className="flex flex-col mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Images
          </label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="mb-2"
          />
        </div>

        <Button label={"Add Property"} onClick={handleButtonClick} />

        <BottomWarning label={"Please fill out all required fields"} />
      </div>
    </div>
  );
};

export default AddProperty;
