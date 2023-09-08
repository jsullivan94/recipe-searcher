import { useParams } from "react-router-dom";

function RecipeDetails({ recipes }) {

    const { id } = useParams();
    const recipe = recipes.find(r => r.id === id);

const ingredientsList = recipe.ingredients.map(ingredient => {
    return <h3>{ingredient}</h3>
});

const stepsList = recipe.steps.map(step => {
    return <p>{step}</p>
});

return(
    <div className="details">
        <img src={recipe.image} />
    <h1>{recipe.name}</h1>
    <div>
        {ingredientsList}
    </div>
    <div>
        {stepsList}
    </div>
    </div>
)};

export default RecipeDetails;