import { Button, IconButton } from '@mui/material';
import React from 'react';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function Cartitem() {
  return (
    <div className='p-5 shadow-1g border rounded-md'>

      <div className='flex items-center'>

        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img className='w-full h-full object-cover object-top' src="https://rukminiml.
              flixcart.com/image/612/612/xif0q/jean/2/q/g/
              30-jeans-kneecut-black-crishtaliyo-2fashion-original-imagqy6gzmpwqkge.jpeg?q=70"
            alt="" />
        </div>

        <div className='ml-5 space-y-1'>
          <p className='font-semibold' > Men Slim Mid Rise Black Jeans</p>
          <p className='opacity-70'>Size: L, White</p>
          <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2fashion</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">211 </p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>

      </div>

      <div className='lg:flex items-center lg: space-x-10 pt-4'>

        <div className='flex items-center space-x-2'>
          <IconButton >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className='py-1 px-7 border rounded-sm'>3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }} >remove</Button>
        </div>

      </div>

    </div>
  );
}

export default Cartitem;
