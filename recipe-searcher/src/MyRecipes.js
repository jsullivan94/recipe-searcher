import RecipeForm from "./RecipeForm";
import RecipeCard from "./RecipeCard";


function MyRecipes({ myRecipes, setMyRecipes, setRecipes }) {
    
    const currentRecipe = myRecipes.map(myRecipe => <RecipeCard  key={myRecipe.id} {...myRecipe}/>)

return (
    <div>
        <RecipeForm setMyRecipes={setMyRecipes} setRecipes={setRecipes}/>
        <div className="recipe-container">
            {currentRecipe}
        </div>
    </div>
)};

export default MyRecipes;