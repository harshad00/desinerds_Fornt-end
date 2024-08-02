/* eslint-disable react/prop-types */
import React from 'react';

function Button({ label, disable}) {
  return (
    <div>
      <button
        // onClick={handleClick}
        type="submit"
        className="w-full my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        disabled={disable}
      
      >
        {label}
      </button>
    </div>
  );
}
const MemoizedButton = React.memo(Button);
export { MemoizedButton as Button };