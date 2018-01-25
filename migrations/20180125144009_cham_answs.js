
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cham_answs', (table)=> {
    table.increments('id').primary()
    table.integer('cham_q_id')
    table.string('answer')
    table.boolean('isCorrect')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cham_answs')
};
