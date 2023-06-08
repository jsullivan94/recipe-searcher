import { useState } from "react";


function RecipeCard({id, name, image, description, setRecipes, onClick}) {

    const [isLiked, setIsLiked] = useState(false)
    function handleClick(){
        setIsLiked(preVal => !preVal)
    }
   
    
  function handleDelete(){
    fetch(`http://localhost:3000/recipes/${id}`,{
        method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() =>setRecipes(prevRecipes =>{
        return prevRecipes.filter(recipe=> recipe.id !== id)
    }) )
}
    return (
            <div className="recipe-card">
                <h1 >{name}</h1>
                <img onClick={onClick} src={image} alt={name}/>
                <div>{description}</div>
                <div>
                 {!isLiked ?
                <button className="like-btn" onClick={handleClick}>Favorite  &#x2661;</button> :
                <button className="like-btn" onClick={handleClick}>UnFavorite  &#x1F49C;</button>
                 }
                 &nbsp;&nbsp;&nbsp;<button className="del-btn" onClick={handleDelete}>Delete &#128465;</button>
            
                </div>
    
            </div>
);

}

export default RecipeCard;