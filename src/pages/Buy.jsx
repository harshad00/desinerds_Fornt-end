import React from 'react';
import EmailAuth from './changePassword/EmailAuth';

function Buy() {
  return (
    <>    <div className='h-screen bg-yellow-200 flex text-8xl justify-center items-center text-black/50  '>
      Buy
    </div>

    <div>
      <EmailAuth/>
    </div>
    </>


  );
}

export default Buy;
