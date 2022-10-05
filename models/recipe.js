const db = require('../db/db')

const Recipe = {
  findAll: () => {
    const sql = 'SELECT * FROM recipes'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)

  }
  //,

  // create: (name, flavour, ingredients, cooking_method) => {
  //   const sql = `
  //     INSERT INTO recipes(name, flavour, ingredients, cooking_method)
  //     VALUES ($1, $2, $3, $4)
  //     RETURNING *
  //   `

  //   return db
  //     .query(sql, [name, flavour, ingredients, cooking_method])
  //     .then(dbRes => dbRes.rows[0])
  // },

  // delete: recipeId => {
  //   const sql = `
  //     DELETE FROM recipes WHERE id = $1
  //   `

  //   return db.query(sql, [recipeId])
  // }
}

module.exports = Recipe