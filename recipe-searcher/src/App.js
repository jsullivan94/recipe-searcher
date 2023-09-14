import {useState, useEffect} from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RecipeList from "./RecipeList";
import Calculator from "./Calculator";
import arrayShuffle from "array-shuffle";
import MyRecipes from "./MyRecipes";
import Nav from "./Nav";
import RecipeDetails from "./RecipeDetails";
import Login from "./Login";
import Cookies from "js-cookie";
import MyRecipeDetails from "./MyRecipeDetails";
import Favorites from "./Favorites";
import FavRecipeDetails from "./FavRecipeDetails";

function App() {
  const [recipes, setRecipes] = useState([])
  const [myRecipes, setMyRecipes] = useState([])
  const [selectedFilter, setSelectedFilter ] = useState('All')
  const [search, setSearch] = useState('')
  const [user, setUser] = useState(null)
  const [fav, setFav] = useState([])
  const buttonResult = selectedFilter === 'All' ? recipes : recipes.filter(r => r.subcategory === selectedFilter)
  const result = buttonResult.filter(r => search === '' ? true : r.name.toLowerCase().includes(search.toLowerCase()) )

  useEffect(() => {
    fetch('http://localhost:3000/recipes/')
    .then(resp => resp.json())
    .then(recipeData => arrayShuffle(recipeData))
    .then(shuffledData => setRecipes(shuffledData))
  }, [])

  const cookie = Cookies.get('flavorful_id')
  
  useEffect(() => {
    if (cookie) {
      fetch(`http://localhost:3000/users?username=${cookie}`)
      .then(resp => resp.json())
      .then(resp => setUser(resp))
    }
  }, [])
  

  return (
    
    <div>
    <BrowserRouter>
    {!user ? <Login user={user} setUser={setUser} /> 
    : 
    <div>
    <Nav />
    <Routes>
      <Route path="/favoriterecipe/:id" element={<FavRecipeDetails fav={fav} />} />
      <Route path="/favorites" element={<Favorites fav={fav} setFav={setFav} />} />
      <Route path="myrecipe/:id" element={<MyRecipeDetails myRecipes={myRecipes} />} />
      <Route path="/myrecipes" element={  <MyRecipes user={user} setRecipes={setRecipes} myRecipes={myRecipes} setMyRecipes={setMyRecipes}/>}/>
      <Route path="/" element={ <RecipeList setFav={setFav} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} 
        setSearch={setSearch} recipes={result} setRecipes={setRecipes}/>}/>
      <Route path="/calculator" element={<Calculator />} />
      <Route path="recipe/:id" element={<RecipeDetails recipes={recipes} />} />
      <Route path="login" element={<Login user={user} setUser={setUser} />} />
    </Routes></div>} 
    </BrowserRouter>
  </div>
  );
}

export default App;

  