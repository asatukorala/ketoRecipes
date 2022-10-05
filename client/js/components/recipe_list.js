function renderRecipeList() {

  document.querySelector('#page').innerHTML = `
  <section class ='recipe-list'>
  ${renderRecipes()}
  </section>
  `
}

function renderRecipes() {
  return state.recipes.map(recipe => `

  <section class="recipe">
  <header> 
    <h2>${recipe.name})</h2>
    <h3>${recipe.flavour}</h3>
  </header>
  <img src="${recipe.img}>"
  <br>
  <p> ${recipe.ingredients} </p>
  <p> ${recipe.cooking_method} </p>
  </section>
  `).join('')

}