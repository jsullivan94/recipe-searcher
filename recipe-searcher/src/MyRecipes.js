import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";

function MyRecipes({setRecipes , recipes}) {
return (
    <div>
    <RecipeForm  setRecipes={setRecipes}/>
    </div>
)
}

export default MyRecipes;