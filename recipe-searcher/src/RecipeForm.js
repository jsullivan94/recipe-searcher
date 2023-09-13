
function RecipeForm({setMyRecipes}) {

function handleSubmit(event){
  event.preventDefault()

const newRecipe = {
    "name":event.target.name.value,
    "description": event.target.description.value,
    "image": event.target.image.value, 
    "url":"",
    "author":"",
    "rattings":0,
    "ingredients": [event.target.ingredients.value],
    "steps": [event.target.steps.value],
     "nutrients": {},
      "times": {
        "Preparation": "",
        "Cooking": ""
      },
      "serves": 0,
      "difficult": "Easy",
      "vote_count": 2,
      "subcategory": [event.target.subcategory.value],
      "dish_type": "Mood boosting recipes",
      "maincategory": "health"
}    

fetch("http://localhost:3000/recipes",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify(newRecipe)    
})
.then(resp => resp.json())
.then(newRecipeData => setMyRecipes(prevRecipes =>{
  return [newRecipeData]
}))
}

return (
    <div className="container">
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <h2>Create a New Recipe!</h2>
      <input
        type="text"
        name="name"
        placeholder="name..."
        className="input-text"
      />
      <br/>
      <textarea
          type="text"
          name="description"
          placeholder="description..."
          className="input-text"
        />
      <br/>
      <input
        type="text"
        name="image"
        placeholder="image URL..."
        className="input-text"
      />
      <br />
      <textarea
        type="text"
        name="ingredients"
        placeholder="ingredients..."
        className="input-text"
      />
      <br />
      <input
        type="text" 
        name="subcategory"
        placeholder="Breakfast, Lunch, Dinner or Vegan..."
        className="input-text"/>
      <br/>
      <textarea
          type="text"
          name="steps"
          placeholder="instructions..."
          className="input-text"
        />
        <br/>
      <input
        type="submit"
        name="submit"
        value="Create New Recipe"
        className="submit"
      />
    </form>
  </div>
);
}

export default RecipeForm;