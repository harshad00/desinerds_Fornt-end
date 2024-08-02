/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Button,
  Heading,
  SubHeading,
  InputBox,
  BottomWarning,
  RadioButton,
} from "../../components";
import axios from "axios";
import Cookies from "js-cookie";

function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [detail, setDetail] = useState({
    identifier: "",
    password: "",
    role: "admin", // Default role to admin
  });
  const [buttonClass, setButtonClass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const handleButtonClick = async () => {
    setButtonClass("button-click-animation");
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/signin`,
        detail
      );
      console.log(response.data);
      Cookies.set("token", response.data.token, { expires: 10 });
      setTimeout(() => {
        navigate("/admin-dashboard", { state: { message: "Login Successfully" } }); // Redirect to admin dashboard
      }, 200);
    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const message = location.state?.message;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleButtonClick();
      }}
      className="bg-slate-300 h-screen flex justify-center"
    >
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          {message && (
            <p className=" font-semibold text-green-400 text-2xl ">{message}</p>
          )}
        </div>
        {error && (
          <p className=" font-semibold text-red-400 text-2xl ">{error}</p>
        )}
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Admin Login"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={handleInputChange}
            name="identifier"
            placeholder="Enter your Email or Phone Number"
            label={"Email or PhoneNo."}
          />
          <InputBox
            onChange={handleInputChange}
            name="password"
            placeholder="123456"
            label={"Password"}
          />
          
          <div className="pt-4">
            <Button
              label={loading ? "Loading..." : "Login"}
              className={`${buttonClass} ${
                loading ? "bg-gray-400 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            />
          </div>
         
        </div>
      </div>
    </form>
  );
}

export default AdminLogin;
