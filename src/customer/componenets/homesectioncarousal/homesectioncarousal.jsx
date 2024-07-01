import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Homesectioncard from "../homesectioncard/homesectioncard";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Homesectioncarousal = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <Homesectioncard product={item}/>);

  return (
    <div className=" border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex !== items.length-5 && 
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              bgcolor: "white",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
          >
            <KeyboardArrowRightIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        }

        {activeIndex !== 0 && 
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              bgcolor: "white",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        }
      </div>
    </div>
  );
};

export default Homesectioncarousal;
