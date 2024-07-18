import React, { useCallback, useRef } from 'react';

function Button({ label, onClick }) {
  const timerRef = useRef(null);

  const handleClick = useCallback(
    (event) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        onClick(event); // Pass the event object to the onClick function
      }, 300); // Adjust the debounce delay as needed
    },
    [onClick]
  );

  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        className="w-full my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        {label}
      </button>
    </div>
  );
}
const MemoizedButton = React.memo(Button);
export { MemoizedButton as Button };