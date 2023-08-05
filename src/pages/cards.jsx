import React from "react";
import logo from "../assets/logo1.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function Cards(props) {
  const data = [
    {
      logo: logo,
      deapart: "11/02/2023",
      departTime: "08:01 PM",
      stops:0,
      duration:'8hours 23mins',
      arrive: '13/02/2023',
      arriveTime: 

    },
  ];
  return (
    <div className="bg-white hover:shadow-2xl cursor-pointer rounded-lg shadow p-2 w-full h-auto">
      <div className="grid grid-cols-2 lg:flex space-x-14 md:spa">
        <div>
          <img src={logo} alt="" style={{ width: "6rem" }} />
        </div>
        <div>
          <p>Depart</p>
          <p className="flex text-secondColor">11/07/2023 </p>
          <p className="text-secondColor font-semibold">07:04 PM</p>
        </div>
        <BiDotsHorizontalRounded
          className="mt-5 hidden lg:block text-primaryColor"
          size={25}
        />{" "}
        <div className="  text-center mt-4">
          <p className="bg-secondColor px-3 py-1 rounded-full text-white font-bold">
            0 Stops
          </p>
          <p>8hours 23mins</p>
        </div>
        <BiDotsHorizontalRounded
          className="hidden lg:block mt-5 text-primaryColor"
          size={25}
        />{" "}
        <div>
          <p>Arrive</p>
          <p className="flex text-secondColor">12/11/2023 </p>
          <p className="text-secondColor font-semibold">02:45 PM</p>
        </div>
        <div>
          <p>Price</p>
          <p className="text-secondColor font-bold">$ 500</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
