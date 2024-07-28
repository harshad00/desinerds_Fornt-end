import { useState } from "react";
import {
  Button,
  Heading,
  SubHeading,
  InputBox,
  BottomWarning,
  RadioButton,
} from "../components";
import { Link } from "react-router-dom";
import axios from "axios";
const cloudName = import.meta.env.VITE_CLOUD_NAME; 
const Preset = import.meta.env.VITE_PRESET_CLOUD; 

const SignUp = () => {
  const [detail, setDetail] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    photo: null, // Use null instead of an empty string for file inputs
    role: "",
    address: "",
  });

  const handleInputChange = (e) => {
    if (e.target.type === 'file') {
      setDetail({ ...detail, photo: e.target.files[0] }); // Handle file input
    } else {
      setDetail({ ...detail, [e.target.name]: e.target.value });
    }
  };

  const handleRoleChange = (e) => {
    setDetail({ ...detail, role: e.target.value });
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    try {
      let photoUrl = "";
      if (detail.photo) {
        const formData = new FormData();
        formData.append("file", detail.photo);
        formData.append("upload_preset", Preset); // Replace with your preset
        formData.append("cloud_name", cloudName); // Replace with your cloud name

        const photoResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, // Correct endpoint
          formData
        );
        photoUrl = photoResponse.data.secure_url; // Get the photo URL
      }
      
      const userDetails = {
        ...detail,
        photo: photoUrl, // Add photo URL to user details
      };

      // Log userDetails to ensure the photo URL is included
      console.log("User Details before sending:", userDetails);
      
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/signup`,
        userDetails
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="h-screen md:h-[40rem] mt-5 overflow-x-auto scrollbar-hide">
        <div className="flex flex-col mb-10 justify-center">
          <div className="rounded-lg bg-white min-w-2.5 text-center p-2 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox
              onChange={handleInputChange}
              name="name"
              label={"Name"}
              placeholder={"e.g, John"}
            />
            <InputBox
              onChange={handleInputChange}
              name="email"
              label={"Email"}
              placeholder={"johndoe@gmail.com"}
            />
            <InputBox
              onChange={handleInputChange}
              name="password"
              label={"Password"}
              placeholder={"123456"}
              type="password"
            />
            <InputBox
              onChange={handleInputChange}
              name="confirmPassword"
              label={"Confirm Password"}
              placeholder={"123456"}
              type="password"
            />
            <InputBox
              onChange={handleInputChange}
              name="address"
              label={"Address"}
              placeholder={"123456"}
            />
            <InputBox
              onChange={handleInputChange}
              name="phone"
              label={"Phone No"}
              placeholder={"7854129632"}
            />
            <InputBox
              type={'file'}
              onChange={handleInputChange}
              name="photo"
              label={"Photo"}
            />
            
            <div className="flex justify-around mt-4">
              <label htmlFor="">Sign Up As</label>
              <RadioButton
                name="role"
                value="user"
                label="User"
                checked={detail.role === "user"}
                onChange={handleRoleChange}
              />
              <RadioButton
                name="role"
                value="owner"
                label="Owner"
                checked={detail.role === "owner"}
                onChange={handleRoleChange}
              />
            </div>
            {/* <Link to={"/auth"}> */}
              <Button label={"Sign up"} onClick={handleButtonClick} />
            {/* </Link> */}
            <BottomWarning
              label={"Already have an account?"}
              to={"/signin"}
              buttonText={"Sign in"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
