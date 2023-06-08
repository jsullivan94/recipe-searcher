import RecipeCard from "./RecipeCard";
import RecipeDetails from "./RecipeDetails";
import { useState } from "react"
import Header from "./Header";

function RecipeList({ setSearch, selectedFilter, setSelectedFilter, recipes, setRecipes }) {
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
      <div>
      <RecipeDetails
        key={recipe.id}
        ingredients={recipe.ingredients}
        steps={recipe.steps}
      />
      </div>
    );
  }
  return null;
}

return (
  <div>
    <Header selectedFilter={selectedFilter} 
        setSelectedFilter={setSelectedFilter} 
        setSearch={setSearch}/>
    {renderRecipeDetails(null)}
    <div className="recipe-container">
      {individualRecipe}
    </div>
  </div>
  );
}

export default RecipeList;