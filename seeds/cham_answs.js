
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cham_answs').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('cham_answs').insert({id: 12301, 'cham_q_id': 30001, answer: 'james.bryant18@gmail.com', isCorrect: true}),
        knex('cham_answs').insert({id: 12302, 'cham_q_id': 30002, answer: 'test1@gmail.com', isCorrect: false}),
        knex('cham_answs').insert({id: 12303, 'cham_q_id': 30003, answer: 'test2@gmail.com', isCorrect: false}),
        knex('cham_answs').insert({id: 12304, 'cham_q_id': 30004, answer: 'test3@gmail.com', isCorrect: false}),
        knex('cham_answs').insert({id: 12305, 'cham_q_id': 30005, answer: 'test4@gmail.com', isCorrect: false}),
      ])
    })
}
