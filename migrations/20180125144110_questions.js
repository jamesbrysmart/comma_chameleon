
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('questions', (table)=> {
    table.increments('id').primary()
    table.string('question')
    table.string('image_link')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions')
};
