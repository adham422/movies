import React from "react";
import ReactPaginate from 'react-paginate';
const PaginationComponent = ({getpage,pageCount}) => {
  const handlePageClick=(data)=>{
    getpage(data.selected + 1)
    console.log(data.selected + 1)//to return number of page
    
  }

  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالي >"
    onPageChange={handlePageClick}
    marginPagesDisplayed={1}
    pageRangeDisplayed={1}
    pageCount={pageCount}
    previousLabel="< السابق"
   containerClassName={"pagination d-flex justify-content-center p-3"}
   pageClassName={"page-item"}
   pageLinkClassName={"page-link"}
   previousClassName={"page-item"}
   nextClassName={"page-item"}
   previousLinkClassName={"page-link"}
   nextLinkClassName={"page-link"}
   breakClassName={"page-item"}
   breakLinkClassName={"page-link"}
   activeClassName={"active"}
  />
  );
};

export default PaginationComponent;
