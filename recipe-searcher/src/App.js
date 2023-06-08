import React, {useState, useEffect} from "react";
import RecipeList from "./RecipeList";
import Calculator from "./Calculator";
import arrayShuffle from "array-shuffle";
import MyRecipes from "./MyRecipes";
import About from "./About";
import { Route, BrowserRouter,Link , Routes } from "react-router-dom";




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
                <nav>
                 <Link to="/" >Home</Link> &#160; &#160;
                <Link  to="/about">About</Link> &#160; &#160;
                <Link to="/newrecipe">My Recipes</Link>&#160; &#160;
                <Link to="/calculator">Calculator</Link>&#160; &#160;
                </nav>
                  <Routes>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/newrecipe" element={  <MyRecipes recipes={recipes} setRecipes={setRecipes} myRecipes={myRecipes} setMyRecipes={setMyRecipes} />}/>
                      <Route path="/" element={ <RecipeList selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} 
        setSearch={setSearch} recipes={result} setRecipes={setRecipes}/>}/>
        <Route path="/calculator" element={<Calculator />} />
                </Routes>
               </BrowserRouter>
             
             
             
          

      </div>
  );
}

export default App;

  