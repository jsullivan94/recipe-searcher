import { useEffect } from "react"
import FavRecipeCard from "../Components/FavRecipeCard"
import Cookies from "js-cookie"

function Favorites({ fav, setFav }) {

    const userId = Cookies.get('flavorful_id')

    useEffect(() => {
        fetch(`http://localhost:3000/users/${userId}`)
        .then(resp => resp.json())
        .then(resp =>setFav(() => resp.likedrecipes))
    }, [])

    const likedRecipes = fav.length === 0 ? <h1 className="no_favs">You have no favorites!</h1> : fav.map(recipe => <FavRecipeCard fav={fav} setFav={setFav}  key={recipe.id} {...recipe}/>)
 
    return (
        <div>
            <div className="recipe-container">{likedRecipes}</div>
        </div>
        )
}

export default Favorites