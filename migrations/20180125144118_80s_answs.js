
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('80s_answs', (table)=> {
    table.increments('id').primary()
    table.integer('80s_q_id')
    table.string('answer')
    table.boolean('isCorrect')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('80s_answs')
};
