import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, setRecipes }) {
    
const individualRecipe = recipes.map(recipe => {
    return <RecipeCard key={recipe.id}{...recipe}
           setRecipes={setRecipes}
          />
    
})
return (
  <div className="recipe-container">
      {individualRecipe}
  </div>
  );
}

export default RecipeList;