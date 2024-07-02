import React from 'react';
import Addresscart from '../addresscard/addresscard';
import Ordertracker from './ordertracker';
import { Box, Grid } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors';


function Orderdetails() {
  return (
    <div className='px-5 1g:px-20'>
      <div>
        <h1 className='font-bold text-xl py-7'> Dilivery Address </h1>
        <Addresscart />
      </div>

      <div className='py-20'>
        <Ordertracker activeStep={3} />
      </div>

      <Grid className='space-y-5' container>

        {[1,1,1,1,1].map((item) => <Grid item container className='shadow-md hover:shadow-xl rounded-md p-5'
          sx={{ alignItems: "center", justifyContent: 'space-between' }}>

          <Grid item xs={6}>
            <div className='flex items-center space-x-4'>
              <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://
                          rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/
                          36-mj-bk-p1-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70" alt="" />
              <div className='space-y-2 ml-5'>
                <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                <p className='space-x-5 opacity-50 text-xs font-semibold '>
                  <span>Color: pink</span>
                  <span>Size: M
                  </span>
                </p>
                <p>Seller: linaria</p>
                <p>1099</p>
              </div>
            </div>
          </Grid>

          <Grid item>

            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2' />
              <span>Rate & Review Product</span>
            </Box>

          </Grid>

        </Grid>)}

      </Grid>

    </div >
  );
}

export default Orderdetails;
