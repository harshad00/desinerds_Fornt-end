


import React from 'react';

function BottomWarning({label,to,buttonText}) {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div>
      {label}
  </div>
  {/* <Link  className="pointer underline pl-1 cursor-pointer" to={to}>
      {buttonText}
  </Link>
   */}
   <a href={to} className="pointer underline pl-1 cursor-pointer">{buttonText}</a>

</div>
   
  );
}

export default BottomWarning;

