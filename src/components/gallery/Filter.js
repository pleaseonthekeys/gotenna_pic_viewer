import React, { Component, useEffect, useState, useRef } from 'react';

function Filter({
  width,
  height,
  handleHeightFilter,
  handleWidthFilter,
  handleSubmitFilter,
}) {
  return (
    <div className="center">
      <div className="filter">
        <form onSubmit={handleSubmitFilter}>
          <label>Width</label> <br></br>
          <select className="dimensions" onChange={handleWidthFilter}>
            <option value="100">100</option>
            <option value="250">250</option>
            <option value="300">300</option>
            <option value="400">400</option>
          </select>
          <br></br>
          <label>Height</label>
          <br></br>
          <select className="dimensions" onChange={handleHeightFilter}>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="250">250</option>
            <option value="300">300</option>
          </select>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Filter;
