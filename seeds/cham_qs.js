
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cham_qs').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('cham_qs').insert({id: 30001, question: 'test', image_link: 'james.bryant18@gmail.com'}),
        knex('cham_qs').insert({id: 30002, question: 'test1', image_link: 'test1@gmail.com'}),
        knex('cham_qs').insert({id: 30003, question: 'test2', image_link: 'test2@gmail.com'}),
        knex('cham_qs').insert({id: 30004, question: 'test3', image_link: 'test3@gmail.com'}),
        knex('cham_qs').insert({id: 30005, question: 'test4', image_link: 'test4@gmail.com'}),
      ])
    })
}