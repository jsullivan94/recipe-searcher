import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function FavRecipeCard( { setFav, name, id, image, description } ) {

    function handleDelete() {
        const userId = Cookies.get('flavorful_id')
    
        setFav(prevRecipes => {
            const updatedRecipes = prevRecipes.filter(recipe => recipe.id !== id);
            
            fetch(`http://localhost:3000/users/${userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ likedrecipes: updatedRecipes })
            })
            .then(resp => resp.json())
            
            return updatedRecipes
        });
    }
    
    return (
        <div className="recipe-card">
            <h1>{name}</h1>
            <Link to={`/favoriterecipe/${id}`}>
            <img src={image} alt={name}/>
            </Link>
            <div>{description}</div>
            <div>&nbsp;&nbsp;&nbsp;<button className="del-btn" onClick={() => handleDelete(id)}>Delete &#128465;</button></div>
        </div>
    )};

    export default FavRecipeCard;
