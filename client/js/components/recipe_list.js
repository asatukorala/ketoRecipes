function renderRecipeList() {
  document.querySelector('#page').innerHTML = `
  <section class="recipe-list">
  ${renderRecipes()}
  </section>
  `
}

function renderRecipes() {

  return state.recipes.map(recipe => `

  <section class="recipe" data-id='${recipe.id}'>
  <header> 
    <h2>${recipe.name})</h2>
    <h3>${recipe.flavour}</h3>
  </header>
  <span onClick="deleteTreasure(event)">delete</span>
  <img src="${recipe.img}>"
  <br>
  <p> ${recipe.ingredients} </p>
  <p> ${recipe.cooking_method} </p>
  </section>
  `).join('')

}

function deleteRecipes(event) {
  const deleteBtn = event.target
  const recipeDOM = deleteBtn.closest('.recipe')
  const recipeId = recipeDOM.dataset.id

  fetch(`/api/recipes/${recipeId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.recipes = state.recipes.filter(r => r.id != recipeId)
      renderRecipeList()
    })


}