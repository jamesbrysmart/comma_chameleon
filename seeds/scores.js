
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      console.log('about to seed scores')
      // Inserts seed entries
      return Promise.all([
        knex('scores').insert({id: 10011, user_id: 10001, scores: 40, username: 'Edi'}),
        knex('scores').insert({id: 10012, user_id: 10002, scores: 30, username: 'Brian'}),
        knex('scores').insert({id: 10013, user_id: 10003, scores: 50, username: 'Mel'}),
        knex('scores').insert({id: 10014, user_id: 10004, scores: 20, username: 'Maia'}),
        knex('scores').insert({id: 10015, user_id: 10005, scores: 10, username: 'Guy'}),
        knex('scores').insert({id: 10016, user_id: 10006, scores: 40, username: 'Phuong'}),
        knex('scores').insert({id: 10017, user_id: 10007, scores: 30, username: 'Nick'}),
        knex('scores').insert({id: 10018, user_id: 10008, scores: 50, username: 'Jess'}),
        knex('scores').insert({id: 10019, user_id: 10009, scores: 20, username: 'Hayden'}),
        knex('scores').insert({id: 10020, user_id: 10010, scores: 10, username: 'James'})
      ])
    })
}