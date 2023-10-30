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
          &#129369;&#160; Flavorful &#160;&#160;&#129367;
        </h1>
      </div>
      <div>
        <select className="cat_dropdown" onChange={e => setSelectedFilter(e.target.value)}>
          <option>All</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Vegetarian</option> 
          <option>Vegan</option>
          <option>Desserts</option>
          </select>
      </div>
      <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." />
    </header>
  </div>
  );
}

export default Header;