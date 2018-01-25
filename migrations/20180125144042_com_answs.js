
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('com_answs', (table)=> {
    table.increments('id').primary()
    table.integer('com_q_id')
    table.string('sentence_commas')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('com_answs')
};