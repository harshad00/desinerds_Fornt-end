import { useState, useEffect } from "react";
import {
  Button,
  Heading,
  SubHeading,
  InputBox,
  BottomWarning,
} from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const UpdateUser = () => {
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [buttonClass, setButtonClass] = useState("");
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setDetail(response.data);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
      }
    };

    fetchUserData();
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  
  const handleButtonClick = async () => {
    setButtonClass("button-click-animation");
    setLoading(true);
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/user/profile`,
        detail,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      navigate("/profile", {
        state: { message: "Your profile has been updated!" },
      });
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
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
            <Heading label={"Update Profile"} />
            <SubHeading label={"Update your information"} />
            {error && (
              <p className="font-semibold text-red-400 text-2xl">{String(error)}</p>
            )}
            <InputBox
              onChange={handleInputChange}
              name="name"
              label={"Name"}
              placeholder={"e.g, John"}
              value={detail.name || ""}
            />
            <InputBox
              onChange={handleInputChange}
              name="email"
              label={"Email"}
              placeholder={"johndoe@gmail.com"}
              value={detail.email || ""}
            />
            <InputBox
              onChange={handleInputChange}
              name="address"
              label={"Address"}
              placeholder={"123456"}
              value={detail.address || ""}
            />
            <InputBox
              onChange={handleInputChange}
              name="phone"
              label={"Phone No"}
              placeholder={"7854129632"}
              value={detail.phone || ""}
            />
            <Button
              label={loading ? "Loading..." : "Update Profile"}
              className={`${buttonClass} ${
                loading ? "bg-gray-400 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            />
            <BottomWarning
              label={"Back to profile?"}
              to={"/profile"}
              buttonText={"Profile"}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateUser;
