import React, {useState, useEffect} from "react";
import Header from "./Header";
import RecipeList from "./RecipeList";
import Calculator from "./Calculator";


function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/recipes/')
    .then(resp => resp.json())
    .then(recipeData => setRecipes(recipeData))
  }, [])

  return (
      <div>
     <Header />
     <RecipeList recipes={recipes}/>
     <Calculator />
      </div>
  );
}

export default App;
