import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { data } from "./data";
import Pagination from "./pagination";

function Cards(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      {currentPost.map((item, index) => (
        <div className="bg-white mt-5 md:mt-6 hover:shadow-2xl cursor-pointer rounded-lg shadow p-2 w-full h-auto">
          <div className="grid grid-cols-2 lg:flex space-x-14 md:spa">
            <div>
              <img src={item.logo} alt="" style={{ width: "6rem" }} />
            </div>
            <div>
              <p>Depart</p>
              <p className="flex text-secondColor">{item.deapart} </p>
              <p className="text-secondColor font-semibold">
                {item.departTime}
              </p>
            </div>
            <BiDotsHorizontalRounded
              className="mt-5 hidden lg:block text-primaryColor"
              size={25}
            />{" "}
            <div className="  text-center mt-4">
              <p
                style={{
                  backgroundColor: `${item.stops > 0 ? "#74c684" : ""}`,
                }}
                className={`
                } bg-secondColor px-3 py-1 rounded-full text-white font-bold`}
              >
                {item.stops} Stops
              </p>
              <p>8hours 23mins</p>
            </div>
            <BiDotsHorizontalRounded
              className="hidden lg:block mt-5 text-primaryColor"
              size={25}
            />{" "}
            <div>
              <p>Arrive</p>
              <p className="flex text-secondColor">{item.arrive} </p>
              <p className="text-secondColor font-semibold">
                {item.arriveTime}
              </p>
            </div>
            <div>
              <p>Price</p>
              <p className="text-secondColor font-bold">$ {item.price}</p>
            </div>
          </div>
        </div>
      ))}

      <div>
        <Pagination
          totalPost={data.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Cards;
