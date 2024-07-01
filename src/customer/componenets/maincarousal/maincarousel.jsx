import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { maincarousaldata } from './maincarousaldata';
import 'react-alice-carousel/lib/alice-carousel.css';



const maincarousel = () => {

    const items = maincarousaldata.map((item) =>
        <img className='cursor-pointer -z-10' src={item.image} alt={item.path}></img>
    )

    return (
        <div>
            <AliceCarousel
            items={items}
            autoPlay
            disableButtonsControls
            autoPlayInterval={1000}
            infinite
            />
        </div>
    )
};

export default maincarousel