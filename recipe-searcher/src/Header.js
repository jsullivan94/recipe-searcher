import React from "react";

function Header({setSelectedFilter, setSearch }) {
const headerStyle = {
  backgroundImage: "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80)",
  backgroundSize: "cover",
  backgroundPosition: "center"
};
return (
  <div>
    <header style={headerStyle}>
      <div className="header_name">
        <h1 className="header_background">
          &#129369;&#160; FlatVorful &#160;&#160;&#129367;
        </h1>
      </div>
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
  </div>
  );
}

export default Header;