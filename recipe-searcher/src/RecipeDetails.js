function RecipeDetails({ ingredients, steps}) {

const ingredientsList = ingredients.map(ingredient => {
    return <h3>{ingredient}</h3>
    
} )
const stepsList = steps.map(step => {
    return <p>{step}</p>
})

return(
    <div>
    <div>{ingredientsList}</div>
    <div>{stepsList}</div>
    </div>
)
}

export default RecipeDetails;