import React, {useState, useEffect} from "react";
import Header from "./Header";
import RecipeList from "./RecipeList";
import Calculator from "./Calculator";
import RecipeForm from "./RecipeForm";
import MyRecipes from "./MyRecipes";

function App() {
  const [recipes, setRecipes] = useState([])
  const [ selectedFilter, setSelectedFilter ] = useState(null)
  const [search, setSearch] = useState('')
  const buttonResult = selectedFilter === null ? recipes : recipes.filter(r => r.subcategory == selectedFilter)
  const result = buttonResult.filter(r => search === '' ? true : r.name.toLowerCase().includes(search.toLowerCase()) )

  useEffect(() => {
    fetch('http://localhost:3000/recipes/')
    .then(resp => resp.json())
    .then(recipeData => setRecipes(recipeData))
  }, [])

  return (
      <div>
     <Header recipes={recipes} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} setSearch={setSearch}/>
     <MyRecipes setRecipes={setRecipes} />
     <RecipeList recipes={result} setRecipes={setRecipes}/>
     <Calculator />
      </div>
  );
}

export default App;

  