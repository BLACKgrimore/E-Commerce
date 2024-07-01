import React from "react";

function Homesectioncard({product}) {
  return (
    <div
      className="cursor-pointer flex flex-col rounded-lg items-center bg-white shadow-lg 
                    overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
        ></img>
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {product.title}
        </p>
      </div>
    </div>
  );
}

export default Homesectioncard;
