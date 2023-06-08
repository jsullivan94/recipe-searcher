import RecipeForm from "./RecipeForm";
import {useState} from "react"


function MyRecipes({ recipes, setRecipes}) {
    const [myRecipes, setMyRecipes] = useState([])

return (
    <div>
    <RecipeForm  setRecipes={setRecipes}/>
    </div>
)

}

export default MyRecipes;