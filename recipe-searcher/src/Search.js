function Search({ setSelectedFilter, setSearch}) {
 return(
     <header>
        <div>
            <button onClick={() => setSelectedFilter('Breakfast')}>Breakfast</button>&#160;
            <button onClick={() => setSelectedFilter('Lunch')}>Lunch</button>&#160;
            <button onClick={() => setSelectedFilter('Dinner')}>Dinner</button>&#160;
            <button onClick={() => setSelectedFilter(null)}>Show All</button>
        </div>
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." />
    </header>
 )
}

export default Search;