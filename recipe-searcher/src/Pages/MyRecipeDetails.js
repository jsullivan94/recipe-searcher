import { useParams } from "react-router-dom";

function MyRecipeDetails({ myRecipes }) {

    const { id } = useParams();
    const recipe = myRecipes.find(r => r.id === Number(id));

    if (!recipe) {
        return <div>Loading...</div>;
    }

const ingredientsList = recipe.ingredients.map(ingredient => {
    return <h3>{ingredient}</h3>
});

const stepsList = recipe.steps.map(step => {
    return <p>{step}</p>
});

return(
    <div className="details">
        <h1>{recipe.name}</h1>
        <img alt={recipe.name} src={recipe.image} />
    <div>{ingredientsList}</div>
    <div>{stepsList}</div>
    </div>
)};

export default MyRecipeDetails;