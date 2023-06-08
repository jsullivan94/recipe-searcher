import RecipeCard from "./RecipeCard";
import { Link, useParams , Route , Routes, BrowserRouter  } from "react-router-dom";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes, setRecipes }) {
    
const individualRecipe = recipes.map(recipe => {
    return(
     <RecipeCard key={recipe.id}{...recipe} setRecipes={setRecipes}/>
     )
    
})
return (
  <div className="recipe-container">
      {individualRecipe}
  </div>
  );
}

export default RecipeList;