import React from "react";

function Header({setSelectedFilter, setSearch }) {

  return (
    <header>
      <h1>
        Recipe Searcher
      </h1>
      <div>
        <button onClick={() => setSelectedFilter('Breakfast')}>Breakfast</button>
        <button onClick={() => setSelectedFilter('Lunch')}>Lunch</button>
        <button onClick={() => setSelectedFilter('Dinner')}>Dinner</button>
        <button onClick={() => setSelectedFilter('Desserts')}>Desserts</button>
        <button onClick={() => setSelectedFilter('Vegan')}>Vegan</button>
        <button onClick={() => setSelectedFilter(null)}>Show All</button>
      </div>
      <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." />
    </header>
  );
}

export default Header;