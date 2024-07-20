const RUlandLord = () => {
  return (
    <div className="w-full  text-center py-12 bg-slate-100">
        <h2 className="text-violet-500 text-base md:text-lg font-bold">No Spam Promise</h2>
        <h1 className="text-3xl md:text-5xl font-bold md:font-semibold my-5">Are You a Landlord?</h1>
        <p className="opacity-75 lg:text-base text-sm">Discover ways to increase your home's value and get listed. No spam</p>
        <div className="my-6 w-2/3 md:w-1/2 lg:w-1/3 mx-auto bg-white p-2 flex justify-between">
            <input className="p-3 outline-none w-2/3" type="text"  placeholder="Enter Your Email address"/>
            <button className="py-3 px-4 rounded-lg bg-violet-500 ml-auto">Submit</button>
        </div>
        <p>join <span className="text-violet-700 opacity-75 text-sm">10,000+</span> other landlords in our estetery community</p>
    
    </div>
  )
}

export default RUlandLord