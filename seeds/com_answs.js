
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('com_answs').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('com_answs').insert({id: 40001, com_q_id: 210001, sentence_commas: 'james.bryant18@gmail.com'}),
        knex('com_answs').insert({id: 40002, com_q_id: 210002, sentence_commas: 'test1@gmail.com'}),
        knex('com_answs').insert({id: 40003, com_q_id: 210003, sentence_commas: 'test2@gmail.com'}),
        knex('com_answs').insert({id: 40004, com_q_id: 210004, sentence_commas: 'test3@gmail.com'}),
        knex('com_answs').insert({id: 40005, com_q_id: 210005, sentence_commas: 'test4@gmail.com'}),
      ])
    })
}