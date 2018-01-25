
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('users').insert({id: 10001, name: 'James', email: 'james.bryant18@gmail.com'}),
        knex('users').insert({id: 10002, name: 'test1', email: 'test1@gmail.com'}),
        knex('users').insert({id: 10003, name: 'test2', email: 'test2@gmail.com'}),
        knex('users').insert({id: 10004, name: 'test3', email: 'test3@gmail.com'}),
        knex('users').insert({id: 10005, name: 'test4', email: 'test4@gmail.com'}),
      ])
    })
}
