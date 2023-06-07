import React from "react";
import {useState} from 'react'

function Header({recipes, selectedFilter, setSelectedFilter, setSearch }) {

  return (
    <header>
      <h1>
        Recipe Searcher
        <span className="logo" role="img">

        </span>
      </h1>
      <div>

        <button onClick={() => setSelectedFilter('Breakfast')}>Breakfast</button>
        <button onClick={() => setSelectedFilter('Lunch')}>Lunch</button>
        <button onClick={() => setSelectedFilter('Dinner')}>Dinner</button>
        <button onClick={() => setSelectedFilter(null)}>Show All</button>
      </div>
      <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." />
    </header>
  );
}

export default Header;