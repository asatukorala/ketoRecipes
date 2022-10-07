function renderEditRecipe(recipeId) {
  document.querySelector('#page').innerHTML = `
    <section class="create-recipe">
      <form onSubmit="editRecipe(event)">
        <h2>Edit Recipes</h2>
        <fieldset>
          <label for=""></label>
          <input type="hidden" name="recipeId" value="${recipeId}">
        </fieldset>
        <fieldset>
          <label for="">Recipe Name: </label>
          <input type="text" name="name" placeholder="This field is required!"  required>
        </fieldset>
        <fieldset>
          <label for="">Image: </label>
          <input type="text" name="img"placeholder="This field is required!"  required>
        </fieldset>
        <fieldset>
          <label for="">Flavour: </label>
          <input type="text" name="flavour"placeholder="This field is required!"  required>
        </fieldset>
        <fieldset>
          <label for="">Ingredients: </label>
          <input type="text" name="ingredients" placeholder="This field is required!"  required>
        </fieldset>
        <fieldset>
          <label for="">Cooking Method: </label>
          <input type="text" name="cooking_method" placeholder="This field is required!"  required>
        </fieldset>
        <button>Edit Recipe</button>
      </form>
    </section>
  `
}

function editRecipe(event) {
  event.preventDefault()

  const form = event.target
  const data = Object.fromEntries(new FormData(form))

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
      location.reload()
    })
}
