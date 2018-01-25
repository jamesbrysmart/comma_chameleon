
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('80s_answs').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('80s_answs').insert({id: 12301, '80s_q_id': 20001, answer: 'james.bryant18@gmail.com', isCorrect: true}),
        knex('80s_answs').insert({id: 12302, '80s_q_id': 20002, answer: 'test1@gmail.com', isCorrect: false}),
        knex('80s_answs').insert({id: 12303, '80s_q_id': 20003, answer: 'test2@gmail.com', isCorrect: false}),
        knex('80s_answs').insert({id: 12304, '80s_q_id': 20004, answer: 'test3@gmail.com', isCorrect: false}),
        knex('80s_answs').insert({id: 12305, '80s_q_id': 20005, answer: 'test4@gmail.com', isCorrect: false}),
      ])
    })
}
