import React from 'react';

function Logo({size}) {
  return (
    <div className='flex'>
      {/* <img src="" alt="" /> */}
      <img className='w-[1.60rem]' src="../img/Logo/logo.png" alt="not" />
      <h1 className='text-[#100a55] font-semibold text-2xl md:text-2xl '>UrbanNest
  </h1>
    </div>
  );
}

export default Logo;
