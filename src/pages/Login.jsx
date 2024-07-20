import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Heading,
  SubHeading,
  InputBox,
  BottomWarning,
  RadioButton,
} from "../components";
import axios from "axios";

function Login() {
  const [detail, setDetail] = useState({
    username: "",
    password: "",
    role: "user",
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
        "http://localhost:3000/api/v1/user/signin",
        detail
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  //! console.log(detail);
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Login"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <div className="flex justify-around mt-4">
 <label htmlFor="" className=" font-bold"> Login as</label>
            <RadioButton
              name="role"
              value="user"
              label="User"
              checked={detail.role === "user"}
              onChange={handleRoleChange}
              hoverMessage="Select this if you are a regular user"
            />
            <RadioButton
              name="role"
              value="owner"
              label="Owner"
              checked={detail.role === "owner"}
              onChange={handleRoleChange}
              hoverMessage="Select this if you are a store owner"
            />
          </div>
          <InputBox
            onChange={handleInputChange}
            name="username"
            placeholder="harkirat@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={handleInputChange}
            name="password"
            placeholder="123456"
            label={"Password"}
          />

          <Link to={"/forgot_pasword"}>
            <div className=" text-blue-600 pt-3 font-semibold text-start pl-1  hover:underline">
              {" "}
              Forgot Pasword
            </div>
          </Link>
          <div className="pt-4">
            <Button onClick={handleButtonClick} label={"Login"} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
