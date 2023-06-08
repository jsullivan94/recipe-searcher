import React, {useState, useEffect} from "react";
import RecipeList from "./RecipeList";
import Calculator from "./Calculator";
import arrayShuffle from "array-shuffle";
import MyRecipes from "./MyRecipes"


function App() {
  const [recipes, setRecipes] = useState([])
  const [selectedFilter, setSelectedFilter ] = useState(null)
  const [search, setSearch] = useState('')
  const buttonResult = selectedFilter === null ? recipes : recipes.filter(r => r.subcategory === selectedFilter)
  const result = buttonResult.filter(r => search === '' ? true : r.name.toLowerCase().includes(search.toLowerCase()) )


  useEffect(() => {
    fetch('http://localhost:3000/recipes/')
    .then(resp => resp.json())
    .then(recipeData => arrayShuffle(recipeData))
    .then(shuffledData => setRecipes(shuffledData))
  }, [])

  return (
    <div>
      
      <MyRecipes setRecipes={setRecipes}/>
      <RecipeList 
      selectedFilter={selectedFilter} 
      setSelectedFilter={setSelectedFilter} 
      setSearch={setSearch}
      recipes={result}
      setRecipes={setRecipes}/>
      <Calculator />
      </div>
  );
}

export default App;

  