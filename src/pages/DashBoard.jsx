import React, { useState } from "react";
import { BiSolidPlane, BiTrain } from "react-icons/bi";
import { FaShip, FaCar } from "react-icons/fa";
import Form from "./form";
import Result from "./result";

function DashBoard(props) {
  const [active, setActive] = useState([0]);
  const ticketData = [
    {
      icon: <BiSolidPlane size={25} />,
      label: "Flight",
    },
    {
      icon: <BiTrain size={25} />,
      label: "Train",
    },
    {
      icon: <FaShip size={25} />,
      label: "Ship",
    },
    {
      icon: <FaCar size={25} />,
      label: "Car",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen ">
        <div className="bg-bgColorOne">
          <p className="text-primaryColor font-semibold p-5 md:p-10 text-2xl border-solid border-primaryColor1 ">
            Tickets
            <span className="border-solid border-primaryColor1 border-y-2 border-e-2 pr-2">
              4U
            </span>
          </p>
          <div className="flex space-x-2">
            {ticketData.map((item, index) => (
              <div
                onClick={() => {
                  setActive(index);
                }}
                style={{
                  backgroundColor: active === index && "#74c684",
                }}
                className={` ${
                  active === index && "shadow-2xl bg-primaryColor1 text-white"
                } text-center cursor-pointer
             text-logoColor 
             ml-7 md:ml-3
             px-4 py-2  
             lg:px-7 lg:py-4 bg-white text-xl`}
              >
                <div className="ml-3 mb-1">{item.icon}</div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="p-5 md:p-10 text-primaryColor">
            <div>
              <p className=" text-2xl">Best Flight Deals With</p>
              <p className="font-bold mt-2 text-2xl">Ticket4U</p>
            </div>
            <Form />
          </div>
        </div>

        <div className="col-span-2 p-5 md:p-10 bg-bgColorTwo">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
