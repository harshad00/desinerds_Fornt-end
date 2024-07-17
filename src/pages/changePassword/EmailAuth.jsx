import React, { useState } from "react";
import { InputBox,Heading, SubHeading, Button } from "../../components";
import { Link } from "react-router-dom";
const EmailAuth = () => {
  

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Reset Your Pasword"} />
          <SubHeading label={"Enter your Email Id  For Reset your Password. "} />
          <InputBox
            // onChange={handleInputChange}
            type={'mail'}
            name="otp"
            label={"Enter your Email."}
            placeholder={"example@example.com"}
          />
          <input type="checkbox"  /> <label htmlFor=""> Verify your Email </label>

          <div className="flex gap-3 mt-4 justify-center">

          <Link to={'/change_password'}> <Button label={"SUBMIT"} 
          // onClick={handleButtonClick} 
          /> </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default EmailAuth; 





