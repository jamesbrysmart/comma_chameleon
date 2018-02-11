
exports.up = function(knex, Promise) {
  return knex.schema.table('scores', (table) => {
    table.string('username')
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.table('scores', (table)=> {
    table.dropColumn('username')
  })
};
