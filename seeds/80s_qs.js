
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('80s_qs').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('80s_qs').insert({id: 20001, question: "Karma Chameleon is Culture Club's biggest hit. What year was it released?", image_link: 'james.bryant18@gmail.com'}),
        knex('80s_qs').insert({id: 20002, question: "Karma Chameleon was number one, but which of these songs was NOT one of the top 10 best selling songs of 1983?", image_link: 'test1@gmail.com'}),
        knex('80s_qs').insert({id: 20003, question: "Michael Jackson released Thriller in 1982. What is the first track listed on the original album?", image_link: 'test2@gmail.com'}),
        knex('80s_qs').insert({id: 20004, question: "Quincy Jones also produced Donna Summer's 1982 self titled record. Which of these Donna Summer singles was not released in the 1980s?", image_link: 'test3@gmail.com'}),
        knex('80s_qs').insert({id: 20005, question: "The Cutting Crew played on the show in 1985. What is the name of their lead singer?", image_link: 'test4@gmail.com'}),
        knex('80s_qs').insert({id: 20006, question: "Adam Ant won two Ivor Novello awards in 1982. One was for Best selling UK single Stand and Deliver, but what was the other for?", image_link: 'test5@gmail.com'}),
        knex('80s_qs').insert({id: 20007, question: "1982 was a big year for pop music as Madonna made her debut. It was also a crazy year for Ozzy Osbourne. He married his manager Sharon Arden. But what was he arrested for in San Antonio, Texas in February of that year?", image_link: 'test5@gmail.com'}),
        knex('80s_qs').insert({id: 20007, question: "Culture Club performed three dates in Monte Carlo in 1998. What other 80s British band joined them?", image_link: 'test5@gmail.com'}),
      ])
    })
}