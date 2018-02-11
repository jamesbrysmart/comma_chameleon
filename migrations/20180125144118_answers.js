
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('answers', (table)=> {
    table.increments('id').primary()
    table.integer('q_id')
    table.string('answer')
    table.boolean('isCorrect')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('answers')
};
