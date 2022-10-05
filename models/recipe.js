const db = require('../db/db')

const Recipe = {
  findAll: () => {
    const sql = 'SELECT * FROM recipes'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  }  
  
}

module.exports = Recipe