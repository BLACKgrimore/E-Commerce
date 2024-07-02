import React from 'react';
import Addresscart from '../addresscard/addresscard';

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered"
]

function Ordertracker() {
  return (
    <div className='px:5 1g:px-20'>
      <div>
        <h1 className='font-bold text-xl py-7'>Dilivery Address</h1>
        <Addresscart />
      </div>
      <div className='py-20'>
        <OrderTraker activeStep={3} />
      </div>
      I
      <Grid className='space-x-5' container>
        <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: 'space-between' }}>
        </Grid>
      </Grid>
    </div>
  );
}

export default Ordertracker;
