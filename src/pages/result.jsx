import React from "react";
// import  {Link}  from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Cards from "./cards";
function Result(props) {
  return (
    <div className="text-primaryColor">
      <div className="lg:flex grid grid-cols-1  justify-between ">
        <div>
          <p className="text-3xl font-semibold">Search Result </p>
          <p>We found 15 results</p>
        </div>
        <div className="space-x-2 mt-3 lg:mt-0">
          <a href="#" className="bg-white rounded-full px-5 py-2">
            Cheapest
          </a>
          <a href="#" className="bg-white rounded-full px-5 py-2">
            Shortes
          </a>
          <a href="#" className="bg-white rounded-full px-5 py-2">
            Recommended
          </a>
        </div>
      </div>

      {/* <p className=" mt-10">
        {" "}
        LONDON{" "}
        <span>
          <HiOutlineArrowNarrowRight />
        </span>{" "}
        NEWYORK{" "}
      </p> */}

      <div className="flex mt-7 text-secondColor font-bold text-2xl">
        <p className="">LONDON</p>
      <p> <HiOutlineArrowNarrowRight className="mt-1 mx-3" size={30}/></p>
      <p>New York</p>
      </div>

<div>
    <Cards/>
</div>
    </div>
  );
}

export default Result;
