import RecipeForm from "../Components/RecipeForm";
import MyRecipesCard from "../Components/MyRecipesCard";
import Cookies from "js-cookie";
import { useEffect } from "react";



function MyRecipes( {myRecipes, setMyRecipes}) {
    

    const userId = Cookies.get('flavorful_id')

    useEffect(() => {
        fetch(`http://localhost:3000/users/${userId}`)
        .then(resp => resp.json())
        .then(resp =>setMyRecipes(() => resp.myrecipes))
    }, [])

    const userRecipes = !myRecipes ? null : myRecipes.map(myRecipe => <MyRecipesCard myRecipes={myRecipes} setMyRecipes={setMyRecipes}  key={myRecipe.id} {...myRecipe}/>)
 
return (
    <div>
        <RecipeForm setMyRecipes={setMyRecipes}/>
        <div className="recipe-container">{userRecipes}</div>
    </div>
)};

export default MyRecipes;