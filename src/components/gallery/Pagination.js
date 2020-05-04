//render dropdown list to choose number of items per page and which page we are going to be on
import React, { Component, useEffect, useState, useRef } from 'react';

function Paginate({
  size,
  pageNo,
  handlePageChange,
  handlePhotosPerPage,
  handleSubmit,
}) {
  return (
    <div className="right">
      <div className="pagination">
        <form>
          <label>Page Number</label> <br></br>
          <select className="pages" onChange={handlePageChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br></br>
          <label>Photos Per Page</label>
          <br></br>
          <select className="photos" onChange={handlePhotosPerPage}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default Paginate;
