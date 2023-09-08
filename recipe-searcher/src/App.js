import {useState, useEffect} from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RecipeList from "./RecipeList";
import Calculator from "./Calculator";
import arrayShuffle from "array-shuffle";
import MyRecipes from "./MyRecipes";
import About from "./About";
import Nav from "./Nav";
import RecipeDetails from "./RecipeDetails";

function App() {
  const [myRecipes, setMyRecipes] = useState([])
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
  }, [myRecipes])

  return (
  <div>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/newrecipe" element={  <MyRecipes recipes={recipes} setRecipes={setRecipes} myRecipes={myRecipes} setMyRecipes={setMyRecipes} />}/>
        <Route path="/" element={ <RecipeList selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} 
          setSearch={setSearch} recipes={result} setRecipes={setRecipes}/>}/>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="recipe/:id" element={<RecipeDetails recipes={recipes} />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

  