import React from 'react';
import Carousal from "../../componenets/maincarousal/maincarousel.jsx"
import Homesectioncard from '../../componenets/homesectioncard/homesectioncard.jsx';
import Homesectioncarousal from '../../componenets/homesectioncarousal/homesectioncarousal.jsx';
import { mens_kurta } from '../../../data/mens_kurta.js';

function Homepage() {
  return (
    <div>
      <Carousal/>
      <div className="py-20 flex flex-col justify-center space-y-10 px-5 lg:px-10">
        <Homesectioncarousal data={mens_kurta} sectionName={"Men's Kurta"}/>
        <Homesectioncarousal data={mens_kurta} sectionName={"Men's Shoes"}/>
        <Homesectioncarousal data={mens_kurta} sectionName={"Men's Watches"}/>
        <Homesectioncarousal data={mens_kurta} sectionName={"Women's Saree"}/>
        <Homesectioncarousal data={mens_kurta} sectionName={"Women's Suit"}/>
        other section
      </div>
    </div>
  );
}

export default Homepage;
