
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('80s_qs').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('80s_qs').insert({id: 20001, question: 'test', image_link: 'james.bryant18@gmail.com'}),
        knex('80s_qs').insert({id: 20002, question: 'test1', image_link: 'test1@gmail.com'}),
        knex('80s_qs').insert({id: 20003, question: 'test2', image_link: 'test2@gmail.com'}),
        knex('80s_qs').insert({id: 20004, question: 'test3', image_link: 'test3@gmail.com'}),
        knex('80s_qs').insert({id: 20005, question: 'test4', image_link: 'test4@gmail.com'}),
      ])
    })
}