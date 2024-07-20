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

const SignUp = () => {
  const [detail, setDetail] = useState({
    username: "",
    firstName: "",
    password: "",
    lastName: "",
    role: "user",
    flat: "",
    area: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleInputChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setDetail({ ...detail, role: e.target.value });
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        detail
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className=" h-screen md:h-[40rem] mt-5 overflow-x-auto scrollbar-hide">
        <div className="flex flex-col mb-10 justify-center">
          <div className="rounded-lg bg-white min-w-2.5 text-center p-2 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox
              onChange={handleInputChange}
              name="firstName"
              label={"First Name"}
              placeholder={"John"}
            />
            <InputBox
              onChange={handleInputChange}
              name="lastName"
              label={"Last Name"}
              placeholder={"Doe"}
            />
            <InputBox
              onChange={handleInputChange}
              name="username"
              label={"Email"}
              placeholder={"johndoe@gmail.com"}
            />
            <InputBox
              onChange={handleInputChange}
              name="password"
              label={"Password"}
              placeholder={"123456"}
            />
            <div>
              <label className="font-semibold">Address:</label>
            </div>
            <InputBox
              onChange={handleInputChange}
              name="flat"
              label={"Flat, House No, PG Building, Apartment"}
              placeholder={"123A"}
            />
            <InputBox
              onChange={handleInputChange}
              name="area"
              label={"Area, Street, Sector"}
              placeholder={"Sector 21"}
            />
            <InputBox
              onChange={handleInputChange}
              name="landmark"
              label={"Landmark"}
              placeholder={"Near XYZ Park"}
            />
            <InputBox
              onChange={handleInputChange}
              name="pincode"
              label={"Pincode"}
              placeholder={"123456"}
            />
            <InputBox
              onChange={handleInputChange}
              name="city"
              label={"Town/City"}
              placeholder={"City Name"}
            />
            <InputBox
              onChange={handleInputChange}
              name="state"
              label={"State"}
              placeholder={"State Name"}
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
            <Link to={"/auth"}>
              <Button label={"Sign up"} onClick={handleButtonClick} />
            </Link>
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
