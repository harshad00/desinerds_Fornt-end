

const Tenants = () => {
  return (
    <div className="h-full  w-full bg-[#100A55] py-20">
        <div className=" flex flex-col md:flex-row justify-between w-[80%] mx-auto text-white" >
          <div className=" text-3xl md:text-6xl text-center md:w-1/2 px-4 ">
             We make it easy for 
            <span className="text-violet-600"> tenants</span> and 
            <span className="text-violet-600"> landlords</span>
          </div>
          <div className=" md:w-1/3 my-auto text-center mt-5 opacity-70">
            Whether it’s selling your current home, getting financing, or buying a new home, 
            we make it easy  and efficient. The best part? you’ll save a bunch of money and 
            time with our services.
          </div>
        </div>
        {/* first card */}
        <div className="w-[80%] mx-auto mt-20 mb-10 flex flex-col md:flex-row overflow-x-scroll no-scrollbar">
            <div className="flex mb-10 h-60 w-[95%] lg:h-40 bg-violet-900 md:w-1/2 lg:w-5/12 rounded-xl p-1 text-white mr-10">
               <img className="mt-20 md:mt-9 h-10 w-10 mx-1" src="https://www.svgrepo.com/show/151588/player-play-button-of-circular-shape.svg" alt="hjbfljbv" />
               <div className="my-auto px-6">
                <h1 className="font-bold text-lg">Virtual Home Tour</h1>
                <p className="text-sm opacity-85 ">
                   You can communicate directly with landlords and we provide you
                    with virtual tour before you buy or rent the property.
                </p>
               </div> 
            </div>
             {/* second card */}
            <div className="flex mb-10 h-60 w-[95%] md:w-1/2 lg:w-5/12 lg:h-40 bg-white  rounded-xl p-1 text-black mr-10">
               <img className="mt-20 md:mt-9 h-10 w-10 mx-1" src="https://cdn-icons-png.freepik.com/256/281/281743.png?ga=GA1.1.526880306.1720552071&semt=ais_hybrid" alt="hjbfljbv" />
               <div className="my-auto px-6">
                <h1 className="font-bold text-lg">Get ready to apply</h1>
                <p className="text-sm opacity-85 ">
                   Find your dream house? You just need to do a little to no effort
                    and you can start move in to your new dream home!
                </p>
               </div> 
            </div>
            {/* third card */}
            <div className="flex h-60 w-[95%] md:w-1/2 lg:w-5/12 lg:h-40 bg-purple-500  rounded-xl p-1 text-white">
               <img className="mt-9 h-10 w-10 mx-1" src="https://cdn-icons-png.freepik.com/256/44/44428.png?ga=GA1.1.526880306.1720552071&semt=ais_hybrid" alt="hjbfljbv" />
               <div className="my-auto px-6">
                <h1 className="font-bold text-lg">Find the best deal</h1>
                <p className="text-sm opacity-85 ">Browse thousands of properties, save your favorites 
                and set up search alerts so you don’t miss the best home deal!
                </p>
               </div> 
            </div>
        </div>

        
        <div className="h-1 border-b-slate-800 border-b-2"></div>
        <div className="md:w-[80%] mx-auto text-center justify-evenly flex flex-col md:flex-row text-white text-4xl mt-12">
           <div className=" mt-10 mx-auto border-b-2 md:border-b-0 md:border-r-2 w-1/3  text-center">
                7.4% <br /> 
                <span className="text-base opacity-75">Property Return Rate</span>  
           </div>
            <div className=" mt-10 mx-auto border-b-2 md:border-b-0 md:border-r-2 w-1/3 text-center">
                3,856 <br /> 
                <span className="text-base opacity-75">Property In sell & Rent</span>
           </div>
           <div className=" mt-10 mx-auto w-1/3 text-center">
                2,540 <br /> 
                <span className="text-base opacity-75">Daily Completed Transaction</span>
           </div>

        </div>
        
    </div>
  )
}

export default Tenants