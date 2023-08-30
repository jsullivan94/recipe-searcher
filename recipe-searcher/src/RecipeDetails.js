function RecipeDetails({ name, ingredients, steps}) {

const ingredientsList = ingredients.map(ingredient => {
    return <h3>{ingredient}</h3>
});

const stepsList = steps.map(step => {
    return <p>{step}</p>
});

return(
    <div className="details">
    <h1>{name}</h1>
    <div>
        {ingredientsList}
    </div>
    <div>
        {stepsList}
    </div>
    </div>
)};

export default RecipeDetails;