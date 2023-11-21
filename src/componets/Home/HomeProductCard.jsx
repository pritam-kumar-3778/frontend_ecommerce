import React from "react";
import logo from "../Images/logo1.jpg";
import Green_kurta from "../Images/image_prev_ui.png";

import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();
  const colors = [
    { value: "#185bca" },
    { value: "#272425" },
    { value: "#617453" },
    { value: "#f2c758" },
    { value: "#ffffff" },
  ];

  return (
    // <div
    // onClick={() => navigate(`/men/clothing/mens_kurta`)}
    //   className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    // >
    //   <div className="h-[13rem] w-[10rem]">
    //     <img
    //       className="object-cover object-top w-full h-full"
    //       src={product?.image || product?.imageUrl}
    //       alt={product?.title}
    //     />
    //   </div>

    //   <div className="p-4 ">
    //     <h3 className="text-lg font-medium text-gray-900">
    //       {product?.brand || product?.title}
    //     </h3>
    //     <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
    //   </div>
    // </div>

    <div
      onClick={() => navigate(`/men/clothing/mens_kurta`)}
      className="w-[20rem] h-[25rem] bg-[#e3e2df] rounded-[30px] border-[4px] border-white px-[40px] py-[25px] cursor-grab relative"
    >
      <div className="w-12">
        <img src={product?.logo} alt="" />
      </div>
      <h1 className="text-2xl font-extrabold">{product?.brand}</h1>
      <p className="w-[180px] mb-2 text-xs">
        {product?.title}
      </p>
      <div className="flex items-center gap-x-[10px] mb-8">
        <button className="bg-[#617453] text-white text-base font-medium py-[10px] px-[10px] rounded-lg">
          Order
        </button>
        <div className="text-[20px] font-bold text-[#000]">₹ {product?.price}</div>
      </div>
      <ul className="flex gap-x-[10px]">
        {colors.map((color, index) => {
          return (
            <li
              key={index}
              style={{ backgroundColor: color.value }}
              className="w-5 h-8 rounded-full cursor-pointer"
            ></li>
          );
        })}
      </ul>
      <div className="absolute w-[15rem] h-40 top-32 -right-24">
        <img src={product?.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default HomeProductCard;
