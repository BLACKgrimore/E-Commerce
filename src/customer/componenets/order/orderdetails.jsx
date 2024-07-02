import React from 'react';
import Addresscart from '../addresscard/addresscard';



function Orderdetails() {
  return (
    <div className='px-5 1g:px-20'>
      <div>
        <h1 className='font-bold text-xl py-7'> Dilivery Address </h1>
        <Addresscart/>
    </div>
</div >
  );
}

export default Orderdetails;
