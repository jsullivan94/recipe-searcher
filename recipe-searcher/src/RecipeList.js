import RecipeCard from "./RecipeCard";
import Header from "./Header";

function RecipeList({selectedFilter, setSelectedFilter, setSearch, recipes, setRecipes }) {

  const individualRecipe = recipes.map(recipe => {
    return <RecipeCard key={recipe.id} {...recipe}
      setRecipes={setRecipes} />
});


return (
  <div>
    <Header selectedFilter={selectedFilter} 
        setSelectedFilter={setSelectedFilter} 
        setSearch={setSearch}/>
    <div className="recipe-container">
      {individualRecipe}
    </div>
  </div>
  );
}

export default RecipeList;