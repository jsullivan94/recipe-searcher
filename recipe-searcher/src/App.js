import React, {useState, useEffect} from "react";
import Header from "./Header";
import RecipeList from "./RecipeList";
import Calculator from "./Calculator";
import RecipeForm from "./RecipeForm";
import MyRecipes from "./MyRecipes";
import About from "./About";
import { Route, useParams , BrowserRouter,Link , Routes } from "react-router-dom";
import Search from "./Search";



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
            <Header/>
            <BrowserRouter>
                <nav>
                 <Link to="/" >Home</Link> &#160; &#160;
                <Link  to="/about">About</Link> &#160; &#160;
                <Link to="/newrecipe">Add a New Recipe</Link>&#160; &#160;
                <Link to="/search">Search a Recipe by Name</Link>
                </nav>
                  <Routes>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/newrecipe" element={  <MyRecipes setRecipes={setRecipes} />}/>
                      <Route path="/search" element={<Search setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} setSearch={setSearch}/>}/>
                      <Route path="/" element={ <RecipeList recipes={result} setRecipes={setRecipes}/>}/>
                </Routes>
               </BrowserRouter>
             
             <Calculator />
             
          
      </div>
  );
}

export default App;

  