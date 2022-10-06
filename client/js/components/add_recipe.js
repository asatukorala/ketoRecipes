function renderAddRecipe() {
  document.querySelector('#page').innerHTML = `
    <section class="create-recipe">
      <form onSubmit="createRecipe(event)">
        <h2>Add Recipes</h2>
        <fieldset>
          <label for="">Recipe name: </label>
          <input type="text" name="name">
        </fieldset>
        <fieldset>
          <label for="">Image: </label>
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
        <button>Add Recipes</button>
      </form>
    </section>
  `
}

function createRecipe(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))


  fetch('/api/recipes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(recipe => {
      state.recipes.push(recipe)
      renderRecipeList()
    })
}