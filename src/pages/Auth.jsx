import React, { useState } from "react";
import { InputBox,Heading, SubHeading, Button,BottomWarning} from "../components";

const Auth = () => {
  

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Verification"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            // onChange={handleInputChange}
            type={'Number'}
            name="otp"
            label={"Enter your OTP."}
            placeholder={"789546"}
          />

            
          <input type="checkbox"  /> <label htmlFor=""> I'm Not Robot. </label>

          <div className="flex gap-3 mt-4 justify-center">
          <Button label={"RESEND OTP"} 
          // onClick={handleButtonClick} 
          />
          <Button label={"SUBMIT"} 
          // onClick={handleButtonClick} 
          />
          </div>
          {/* <BottomWarning
            label={"Already have an account?"}
            to={"/signin"}
            buttonText={"Sign in"}
          /> */}
        </div>
      </div>
    </div>

  );
};

export default Auth; 





