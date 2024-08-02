/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import axios from "axios";
import { InputBox, Heading, SubHeading } from "../../components";

const EmailAuth = () => {
  const [email, setEmail] = useState("");
  const email2 = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(false); // Added state for checkbox

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/forget-password`,
        { email: email2.current.value }
      );

      console.log("Response:", response.data);
    } catch (err) {
      console.error("Error:", err);
      setError(err.response ? err.response.data.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Reset Your Password"} />
          <SubHeading label={"Enter your Email Id For Reset your Password."} />
          <InputBox
            type={"email"}
            refT={email2}
            name="email"
            label={"Enter your Email."}
            placeholder={"example@example.com"}
            value={email}
            onChange={handleInputChange}
          />
          <input
            type="checkbox"
            id="verify-email"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="verify-email"> Verify your Email </label>
          <div className="flex gap-3 mt-4 justify-center">
            <button
              className={`w-full my-2 text-white
               bg-gray-800 hover:bg-gray-900
               focus:outline-none focus:ring-4
               focus:ring-gray-300 font-medium
               rounded-lg text-sm px-5 py-2.5
               me-2 mb-2
               ${!isChecked || loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} 
              onClick={handleButtonClick}
              disabled={!isChecked || loading}
            >
              {!loading ? "Submit" : "Loading..."}{" "}
            </button>
          </div>
          {error && <p className="text-red-500 font-semibold">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default EmailAuth;
