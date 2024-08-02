import { useState } from "react";
import {
  Button,
  Heading,
  SubHeading,
  InputBox,
  BottomWarning,
  RadioButton,
} from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

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
  const navigate = useNavigate(); // Corrected variable name
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState("");
  const [buttonClass, setButtonClass] = useState("");
  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      setDetail({ ...detail, photo: e.target.files[0] }); // Handle file input
    } else {
      setDetail({ ...detail, [e.target.name]: e.target.value });
    }
  };

  const handleRoleChange = (e) => {
    setDetail({ ...detail, role: e.target.value });
  };


  const handleButtonClick = async () => {
    setButtonClass("button-click-animation"); // Add animation class
    setLoading(true);
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
        `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
        userDetails
      );
      console.log(response.data);
      Cookies.set("token", response.data.token, { expires: 10 });
      navigate("/signin", {
        state: { message: "Your Account successfully created!" },
      }); 
    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false
    }
  };  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleButtonClick();
      }}
      className="bg-slate-300 h-screen flex justify-center"
    >
      <div className="h-screen md:h-[40rem] mt-5 overflow-x-auto scrollbar-hide">
        <div className="flex flex-col mb-10 justify-center">
          <div className="rounded-lg bg-white min-w-2.5 text-center p-2 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
            {error && (
              <p className=" font-semibold text-red-400 text-2xl ">{error}</p>
            )}
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
              type={"file"}
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
            <Button 
            label={loading ? "Loading..." : "Sign up"}
              className={`${buttonClass} ${
                loading ? "bg-gray-400 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button while loading
            />
            <BottomWarning
              label={"Already have an account?"}
              to={"/signin"}
              buttonText={"Sign in"}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
