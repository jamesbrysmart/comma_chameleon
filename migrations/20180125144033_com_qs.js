
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('com_qs', (table)=> {
    table.increments('id').primary()
    table.string('question')
    table.string('sentence_no_commas')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('com_qs')
};