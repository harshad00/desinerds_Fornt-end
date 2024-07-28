import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Heading, SubHeading, InputBox, BottomWarning, RadioButton } from "../components";
import axios from "axios";
import { addUser } from "../store/authSlice";
import { useDispatch } from "react-redux";


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [detail, setDetail] = useState({
    identifier: "",
    password: "",
    role: "user",
  });
<<<<<<< HEAD
  const [Error, setError] = useState("")
=======
  const [buttonClass, setButtonClass] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
>>>>>>> 9659772c4f593680f210852edd68d77ea1f554d7

  const [Error, setError] = useState("")
  const [buttonClass, setButtonClass] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state


  const handleInputChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setDetail({ ...detail, role: e.target.value });
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    setButtonClass("button-click-animation"); // Add animation class
    setLoading(true); // Set loading to true
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/signin`,
        detail
      );
<<<<<<< HEAD
      console.log(response);
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
      dispatch(addUser(response.data.token));
      setTimeout(() => {
        navigate("/");
      }, 200); 
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        
        switch (status) {
          case 400:
            // Handle 400 Bad Request
            setError(data.message); // Assuming the server sends detailed error info in the response body
            break;
          case 403:
            // Handle 403 Forbidden
            setError("You do not have permission to access this resource."); // Customize as needed
            break;
          case 404:
            // Handle 404 Not Found
            setError(data.message);  // Customize as needed
            break;
          default:
            // Handle other status codes or unexpected errors
            setError("An unexpected error occurred."); // Customize as needed
            break;
        }
      } else {
        console.error("Error signing up:", error);
      }
    }
=======
<<<<<<< HEAD
      console.log(response);
      localStorage.setItem("token", response.data.token);
  
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        
        switch (status) {
          case 400:
            // Handle 400 Bad Request
            setError(data.message); // Assuming the server sends detailed error info in the response body
            break;
          case 403:
            // Handle 403 Forbidden
            setError("You do not have permission to access this resource."); // Customize as needed
            break;
          case 404:
            // Handle 404 Not Found
            setError(data.message);  // Customize as needed
            break;
          default:
            // Handle other status codes or unexpected errors
            setError("An unexpected error occurred."); // Customize as needed
            break;
        }
      } else {
        console.error("Error signing up:", error);
      }
=======
      console.log(response.data);
      dispatch(addUser(response.data.token));

      // Navigate to the home page after animation
      setTimeout(() => {
        navigate("/");
      }, 200); // Adjust the delay as needed
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setLoading(false); // Set loading to false
>>>>>>> 9659772c4f593680f210852edd68d77ea1f554d7
    }
  };
  
>>>>>>> 999982b0ab1795af8479e69f0fe7c53b4d5c4fea
  

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Login"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <h3 className="text-red-700 font-bold text-center" > {Error}</h3>
          <div className="flex justify-around mt-4">
            <label htmlFor="" className="font-bold"> Login as</label>
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
          <Link to={"/forgot_password"}>
            <div className="text-blue-600 pt-3 font-semibold text-start pl-1 hover:underline">
              Forgot Password
            </div>
          </Link>
          <div className="pt-4">
            <Button
              onClick={handleButtonClick}
              label={loading ? "Loading..." : "Login"}
              className={`${buttonClass} ${loading ? "bg-gray-400 cursor-not-allowed" : ""}`}
              disabled={loading} // Disable button while loading
            />
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
}
export default Login;
