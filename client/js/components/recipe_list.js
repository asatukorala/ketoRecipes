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
    <h2>${recipe.name}</h2>
    <h3>${recipe.flavour}</h3>
  </header>
  <span class="button" onClick="deleteRecipe(event)">delete</span>
  <span class="button1" onClick="renderEditRecipe(${recipe.id})">edit</span>
  <br></br>
  <img src="${recipe.img}>"
  <br>
  <span><h4>Ingredients</h4></span>
  <p> ${recipe.ingredients} </p>
  <span><h4>Cooking method</h4></span>
  <p> ${recipe.cooking_method} </p>
  </section>
  
  `).join('')

}


function deleteRecipe(event) {
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