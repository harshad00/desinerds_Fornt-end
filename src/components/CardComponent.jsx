/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CardComponent = ({props}) => {
  console.log(props);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
       <Link to={`/properties/${props._id}`}>
        <img
          className="w-full h-48 object-cover"
          src={props?.images[0]} 
          alt="House"
        />
        </Link>
        {props.popular && <div className="absolute top-0 left-0 bg-violet-600 text-white px-2 py-1 rounded-br-lg">
          Popular
        </div>}
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{props?.price}/month</h2>
        <p className="text-gray-600 mt-1">{props?.title}</p>
        <p className="text-gray-600">{props?.location}</p>
        <div className="flex items-center mt-4">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V20H4V13M12 3V15M12 3L6 10H18L12 3Z"
              />
            </svg>
            <span className="ml-2 text-gray-600">{props?.bhk}</span>
          </div>
          <div className="flex items-center ml-4">
          </div>
          <div className="flex items-center ml-4">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.38 0-2.63.56-3.54 1.46a5.012 5.012 0 000 7.07A5.012 5.012 0 0012 18a5.012 5.012 0 003.54-1.46 5.012 5.012 0 000-7.07A5.012 5.012 0 0012 8zm0 10a4.992 4.992 0 01-3.54-1.46 4.992 4.992 0 010-7.07A4.992 4.992 0 0112 10a4.992 4.992 0 013.54 1.46 4.992 4.992 0 010 7.07A4.992 4.992 0 0112 18z"
              />
            </svg>
            <span className="ml-2 text-gray-600">{props?.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
