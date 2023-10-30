import Cookies from "js-cookie"

function RecipeForm({setMyRecipes}) {
  const userId = Cookies.get('flavorful_id');

  function updateRecipesOnServer(updatedRecipes) {
  fetch(`http://localhost:3000/users/${userId}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({myrecipes: updatedRecipes})    
  })
  .then(resp => resp.json())
  .then(updatedUserData => setMyRecipes(() => updatedUserData.myrecipes))
  }

function handleSubmit(event){
  event.preventDefault()
  
  function generateID() {
    return Date.now()
}

const newRecipe = {
    "id": generateID(),
    "name":event.target.name.value,
    "description": event.target.description.value,
    "image": event.target.image.value, 
    "ingredients": [event.target.ingredients.value],
    "steps": [event.target.steps.value],
      "subcategory": event.target.subcategory.value,
}    

fetch(`http://localhost:3000/users/${userId}`)
  .then(response => response.json())
  .then(userData => {
    const user = userData; 
    const updatedRecipes = [...user.myrecipes, newRecipe];
    return updatedRecipes;
  })
  .then(updateRecipesOnServer)
  .catch(error => console.error("Error fetching user data:", error));
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