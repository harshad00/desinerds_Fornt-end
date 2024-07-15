import React from "react";
import { Logo } from "../components"; // Assuming Logo is a component you have already created

function Home() {
  return (
    <div className="h-screen flex pt-32 bg-purple-100 text-black/50">
      <div className="w-1/2 pl-32">
        <h1 className="text-7xl w-[35rem]">
          Buy, rent, or sell your property easily
        </h1>
        <h3 className="mt-4">
          A great platform to buy, sell, or even rent your
          <br /> properties without any commissions.
        </h3>
        <div>
          <div className="">
            <ul className=" mb-1 w-[18rem] flex justify-evenly bg-white gap-3 p-3 rounded-md">
              <li> Rent </li>
              <li> Buy</li>
              <li>Sell</li>
              <span></span>
            </ul>
            <div
              className=" absolute w-[50rem] flex bg-white justify-start items-center gap-10 py-5 rounded-sm "
              style={{ zIndex: 100 }}
            >
              <div className=" px-10">
                <p>Location</p>
                <h2> Barcelona,Spain</h2>
              </div>
              <span className=" w-[1.5px] h-10 bg-black/10"></span>
              <div className="px-5">
                <p>When</p>
                <h2 className=" text-nowrap">SelectMove-in Date </h2>
              </div>
              <span className=" w-[1.5px] h-10 bg-black/10"></span>
              <div className="px-10">
                <button className="  bg-[#7065f0] text-nowrap text-white py-2 p-5   rounded-md">
                  {" "}
                  Bowse Properties{" "}
                </button>
              </div>
            </div>
          </div> 
     <div className=" flex ">
          <div className=" flex justify-center border border-purple-400 rounded-full items-center absolute bottom-0"> 
            <div className=" bg-purple-400 flex justify-center items-center   w-[3rem] h-[3rem] text-2xl  border-white   rounded-full border-4 bottom-1  ">
          <i className="fa-solid fa-users" style={{color:'white'}}></i>
          </div>
          </div>
          <div className=" flex justify-center border border-purple-400 rounded-full items-center absolute bottom-0"> 
            <div className=" bg-purple-400 flex justify-center items-center   w-[3rem] h-[3rem] text-2xl  border-white   rounded-full border-4 bottom-1  ">
          <i className="fa-solid fa-users" style={{color:'white'}}></i>
          </div>
          </div>
          </div>
        </div>
      
      </div>

      {/* <div
        className="absolute top-0 right-[30rem]  mt-52 mr-32"
        style={{ zIndex: 100 }}
      >
        <div className="w-[16rem] bg-white  shadow-lg rounded-lg flex p-4">
          <img
            className="w-[50px] h-[50px] object-cover   rounded-[100%]"
            src="https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Manuel Villa"
          />
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Manuel Villa</h1>
            <p className="text-lg">Renter</p>
            <span className="flex items-center mt-2">
              <p className="mr-2">Moved With</p>
              <Logo />
            </span>
          </div>
        </div>
      </div> */}
      <div className="w-1/2 relative " style={{ zIndex: 0 }}>
        <img
          className="z-0 absolute bottom-0 w-full h-[500px] object-cover"
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Property"
        />
      </div>
    </div>
  );
}

export default Home;
