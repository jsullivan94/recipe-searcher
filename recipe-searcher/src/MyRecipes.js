import RecipeForm from "./RecipeForm";
import {useState} from "react"
import RecipeCard from "./RecipeCard";


function MyRecipes({ setRecipes }) {
    const [myRecipes, setMyRecipes] = useState([])

    const currentRecipe = myRecipes.map(myRecipe => <RecipeCard setMyRecipes={setMyRecipes} key={myRecipe.id} name={myRecipe.name} description={myRecipe.description} image={myRecipe.image}/>)

return (
    <div>
    <RecipeForm setMyRecipes={setMyRecipes} setRecipes={setRecipes}/>
    {currentRecipe}
    </div>
)

}

export default MyRecipes;