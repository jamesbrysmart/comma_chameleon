
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cham_qs', (table)=> {
    table.increments('id').primary()
    table.string('question')
    table.string('image_link')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cham_qs')
};
