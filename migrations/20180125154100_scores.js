
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('scores', (table)=> {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('scores')
})
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scores')
};
