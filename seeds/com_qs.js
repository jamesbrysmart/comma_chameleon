
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('com_qs').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('com_qs').insert({id: 210001, question: 'James', sentence_no_commas: 'james.bryant18@gmail.com'}),
        knex('com_qs').insert({id: 210002, question: 'test1', sentence_no_commas: 'test1@gmail.com'}),
        knex('com_qs').insert({id: 210003, question: 'test2', sentence_no_commas: 'test2@gmail.com'}),
        knex('com_qs').insert({id: 210004, question: 'test3', sentence_no_commas: 'test3@gmail.com'}),
        knex('com_qs').insert({id: 210005, question: 'test4', sentence_no_commas: 'test4@gmail.com'}),
      ])
    })
}
