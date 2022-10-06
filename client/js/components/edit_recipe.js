function renderEditRecipe(recipeId) { 
  document.querySelector('#page').innerHTML = `
 
    <section class="create-recipe">
      <form onSubmit="editRecipe(event)">
        <h2>Edit Recipes</h2>
        <fieldset>
          <label for="">recipeId: </label>
          <input type="text" name="recipeId" value="${recipeId}">
        </fieldset>
        <fieldset>
          <label for="">Name: </label>
          <input type="text" name="name">
        </fieldset>
        <fieldset>
          <label for="">Img: </label>
          <input type="text" name="img">
        </fieldset>
        <fieldset>
          <label for="">Flavour: </label>
          <input type="text" name="flavour">
        </fieldset>
        <fieldset>
          <label for="">Ingredients: </label>
          <input type="text" name="ingredients">
        </fieldset>
        <fieldset>
          <label for="">Cooking Method: </label>
          <input type="text" name="cooking_method">
        </fieldset>
        <button>Edit Recipes</button>
      </form>
    </section>
  `
}

function editRecipe(event) {
  event.preventDefault()
  
  const form = event.target
   
  const data = Object.fromEntries(new FormData(form))

  console.log("meow")
  fetch(`/api/recipes/${data.recipeId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(recipe => {
      console.log(state.recipes)
      state.recipes = state.recipes.filter(r => r.id != recipe)
      
      renderRecipeList()
    })
}
