import React from 'react';

function Pagination({totalPost,postPerPage, setCurrentPage,currentPage}) {

    let pages = []
    
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i);
      }
    return (
        <div>
          {pages.map((item, i) => {
        return (
            
          <button
            className={`${item===currentPage?'bg-primaryColor text-white': 'bg-white mt-6'}
             text-lightColor font-bold  mr-1
             bg-bgColorTwo rounded-lg py-2 px-4` }
            key={i}
            onClick={() => setCurrentPage(item) }

            
          >
            {item}
          </button>
        );
      })}
            
        </div>
    );
}

export default Pagination;