import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

function RecipeCard({ recipes, setFav, id, name, image, description, setRecipes, onClick}) {
    const userId = Cookies.get('flavorful_id')
    const [isLiked, setIsLiked] = useState(false)
    
    
    function handleDelete(){
      fetch(`http://localhost:3000/recipes/${id}`,{
      method: "DELETE"
      })
      .then(resp => resp.json())
      .then(() =>setRecipes(prevRecipes =>{
          return prevRecipes.filter(recipe=> recipe.id !== id)
      }))
      };

    function handleClick(){
        setIsLiked(preVal => !preVal)
      
        fetch(`http://localhost:3000/users/${userId}`)
        .then(response => response.json())
        .then(userData => {
        const user = userData; 
        const likedRecipe = recipes.find(recipe => recipe.id === id)
        const updatedRecipes = [...user.likedrecipes, likedRecipe];
        return updatedRecipes;
      })
      .then(updateRecipesOnServer)
      .catch(error => console.error("Error fetching user data:", error));
      
      function updateRecipesOnServer(updatedRecipes) {
        fetch(`http://localhost:3000/users/${userId}`,{
          method:"PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({likedrecipes: updatedRecipes})    
        })
        .then(resp => resp.json())
        .then(updatedUserData => setFav(() => updatedUserData.likedrecipes))
        }
      }
    
    return (
    <div className="recipe-card">
        <h1 >{name}</h1>
        <Link to={`/recipe/${id}`}>
        <img onClick={onClick} src={image} alt={name}/>
        </Link>
        <div>{description}</div>
        <div>
            {!isLiked ?
                <button className="like-btn" onClick={handleClick}>Favorite  &#x2661;</button> :
                <button className="like-btn" onClick={handleClick}>Favorite  &#x1F49C;</button>
            }
            &nbsp;&nbsp;&nbsp;<button className="del-btn" onClick={handleDelete}>Delete &#128465;</button>
        </div>
    </div>
    
)};

export default RecipeCard;