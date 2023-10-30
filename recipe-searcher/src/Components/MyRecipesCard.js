import Cookies from "js-cookie"
import { Link } from "react-router-dom";

function MyRecipesCard( {name, image, id, description, setMyRecipes}) {
    function handleDelete() {
        const userId = Cookies.get('flavorful_id')
        
        setMyRecipes(prevRecipes => {
            const updatedRecipes = prevRecipes.filter(recipe => recipe.id !== id);
            
            fetch(`http://localhost:3000/users/${userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ myrecipes: updatedRecipes })
            })
            .then(resp => resp.json())
            
            return updatedRecipes
        });
    }
    
return (
    <div className="recipe-card">
        <h1>{name}</h1>
        <Link to={`/myrecipe/${id}`}>
        <img src={image} alt={name}/>
        </Link>
        <div>{description}</div>
        <div>&nbsp;&nbsp;&nbsp;<button className="del-btn" onClick={() => handleDelete(id)}>Delete &#128465;</button></div>
    </div>
    
)};

export default MyRecipesCard;
