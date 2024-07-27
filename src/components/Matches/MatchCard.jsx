/* eslint-disable react/prop-types */

import { useNavigate } from "react-router"

const MatchCard = ({details}) => {
    const navigate=useNavigate();
  return (
    <div 
    onClick={()=>navigate(`/user/${details.id}`)}
    className="flex flex-col w-64 items-center  bg-white rounded-lg shadow-lg max-w-xs mx-auto border-purple-500 border-2 pb-2">
    <div className="relative w-full h-72">
      <img 
        src={details.img}
        alt="Profile" 
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute top-0  bg-purple-500 text-white text-sm font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
        {details.match}% Match
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
        {details.distance} km away
      </div>
    </div>
    <div className="mt-4 text-center">
      <h2 className="text-lg font-bold">{details.name}</h2>
      <p className="text-gray-500">{details.profession}</p>
    </div>
    <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-full shadow-lg focus:outline-none">
      Message
    </button>
  </div>
  )
}

export default MatchCard