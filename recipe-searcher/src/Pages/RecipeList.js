import RecipeCard from "../Components/RecipeCard";
import Header from "../Components/Header";


function RecipeList({setFav, selectedFilter, setSelectedFilter, setSearch, recipes, setRecipes }) {

    const individualRecipe = recipes.map(recipe => {
      return <RecipeCard setFav={setFav} key={recipe.id} {...recipe} recipes={recipes}
      setRecipes={setRecipes} />
});

return (
    <div>
      <Header selectedFilter={selectedFilter} 
        setSelectedFilter={setSelectedFilter} 
        setSearch={setSearch}/>
      <div className="recipe-container">{individualRecipe}</div>
    </div>
  );
}

export default RecipeList;