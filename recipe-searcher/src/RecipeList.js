import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
    
const individualRecipe = recipes.map(recipe => {
    return <RecipeCard key={recipe.id}
    name={recipe.name}
    image={recipe.image}
    description={recipe.description}
    difficult={recipe.difficult}
    />
    
})
return (
  <div>
      {individualRecipe}
  </div>
  );
}

export default RecipeList;