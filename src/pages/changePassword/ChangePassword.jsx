import React from 'react';
import { InputBox,Heading, SubHeading, Button } from "../../components";


function ChangePassword() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Change your Password "} />
        <SubHeading label={"Enter your New Password. "} />
        <InputBox
          // onChange={handleInputChange}
          type={'text'}
          name="changePassword"
          label={"New Password"}
          placeholder={"Enter your new password"}
        />
        <InputBox
          // onChange={handleInputChange}
          type={'text'}
          name="Confirm Password"
          label={"Confirm Password"}
          placeholder={"Confirm Password"}
        />
        {/* <input type="checkbox"  /> <label htmlFor="">  </label> */}

        <div className="flex gap-3 mt-4 justify-center">

        <Button label={"SUBMIT"} 
        // onClick={handleButtonClick} 
        />
        </div>
      </div>
    </div>
  </div>
  );
}

export default ChangePassword;

