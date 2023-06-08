import RecipeCard from "./RecipeCard";
import RecipeDetails from "./RecipeDetails";
import { useState } from "react";

function RecipeList({ recipes, setRecipes }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  function handleRecipeDetails(recipeId) {
    setSelectedRecipe(recipeId);
  }


const individualRecipe = recipes.map(recipe => {
    return <RecipeCard key={recipe.id} {...recipe}
           setRecipes={setRecipes} onClick={() => handleRecipeDetails(recipe.id)}
    />
})

function renderRecipeDetails() {
  if (selectedRecipe) { 
    const recipe = recipes.find(recipe => recipe.id === selectedRecipe);
    return (
      <RecipeDetails
        key={recipe.id}
        ingredients={recipe.ingredients}
        steps={recipe.steps}
      />
    );
  }
  return null;
}

return (
  <div>
    {renderRecipeDetails(null)}
    <div className="recipe-container">
      {individualRecipe}
    </div>
  </div>
  );
}

export default RecipeList;