const Tenants = () => {
  const Data = [
    {
      url: "https://www.svgrepo.com/show/151588/player-play-button-of-circular-shape.svg",
      title: "Virtual Home Tour",
      text: `You can communicate directly with landlords and we provide you
              with virtual tour before you buy or rent the property`,
    },
    {
      url: "https://cdn-icons-png.freepik.com/256/281/281743.png?ga=GA1.1.526880306.1720552071&semt=ais_hybrid",
      title: "Get ready to apply",
      text: ` Find your dream house? You just need to do a little to no effort
              and you can start move in to your new dream home!`,
    },
    {
      url: "https://cdn-icons-png.freepik.com/256/44/44428.png?ga=GA1.1.526880306.1720552071&semt=ais_hybrid",
      title: "Find the best deal",
      text: ` Browse thousands of properties, save your favorites and set up
              search alerts so you don’t miss the best home deal!`,
    },
  ];

  return (
    <div className="h-full w-full bg-[#100A55] py-10 md:py-20">
      <div className="flex flex-col  justify-center items-center   text-white">
        <div className="text-3xl md:text-6xl text-center px-4">
          We make it easy for
          <span className="text-violet-600"> tenants</span> and
          <span className="text-violet-600"> landlords</span>
        </div>
        <div className="w-[100%] lg:w-[40%] text-center mt-10  opacity-70 px-4">
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex  flex-col  sm:flex-row md:lg:justify-evenly px-5 gap-5 py-2">
        {Data.map((d) => (
          <div
            key={d.title}
            className="flex flex-col py-10 gap-y-5  bg-violet-900  rounded-xl p-4 text-white"
          >
            <div className=" flex gap-5 sm:gap-1  lg:gap-5 items-center ">
              <img className="  w-10 mt-4 md:mt-0" src={d.url} alt={d.text} />
              <h1 className="font-bold text-nowrap sm:text-base  text-lg  lg:text-lg">
                {d.title}
              </h1>
            </div>
            <div className="my-auto px-4">
              <p className="text-sm opacity-85">{d.text}</p>
            </div>
          </div>
        ))}{" "}
      </div>

      <div className="h-1 w-[90%] m-auto mt-5 border-b-slate-800 border-b-2"></div>
      <div className="md:w-[80%] mx-auto text-center justify-evenly flex flex-col md:flex-row text-white text-2xl md:text-4xl mt-12">
        <div className="mt-10 mx-auto border-b-2 md:border-b-0 md:border-r-2 w-2/3 md:w-1/3 text-center">
          7.4% <br />
          <span className="text-base opacity-75">Property Return Rate</span>
        </div>
        <div className="mt-10 mx-auto border-b-2 md:border-b-0 md:border-r-2 w-2/3 md:w-1/3 text-center">
          3,856 <br />
          <span className="text-base opacity-75">Property In sell & Rent</span>
        </div>
        <div className="mt-10 mx-auto w-2/3 md:w-1/3 text-center">
          2,540 <br />
          <span className="text-base opacity-75">
            Daily Completed Transaction
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tenants;
