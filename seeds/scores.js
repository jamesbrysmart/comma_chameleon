
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('scores').insert({id: 10011, user_id: 10001, scores: 0}),
        knex('scores').insert({id: 10012, user_id: 10002, scores: 0}),
        knex('scores').insert({id: 10013, user_id: 10003, scores: 0}),
        knex('scores').insert({id: 10014, user_id: 10004, scores: 0}),
        knex('scores').insert({id: 10015, user_id: 10005, scores: 0}),
      ])
    })
}