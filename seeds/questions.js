
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      console.log('about to seed questions')
      // Inserts seed entries
      return Promise.all([
        knex('questions').insert({id: 20001, question: "Karma Chameleon is Culture Club's biggest hit. What year was it released?", image_link: 'james.bryant18@gmail.com'}),
        knex('questions').insert({id: 20002, question: "Karma Chameleon was number one, but which of these songs was NOT one of the top 10 best selling songs of 1983?", image_link: 'test1@gmail.com'}),
        knex('questions').insert({id: 20003, question: "Michael Jackson released Thriller in 1982. What is the first track listed on the original album?", image_link: 'test2@gmail.com'}),
        knex('questions').insert({id: 20004, question: "Quincy Jones also produced Donna Summer's 1982 self titled record. Which of these Donna Summer singles was not released in the 1980s?", image_link: 'test3@gmail.com'}),
        knex('questions').insert({id: 20005, question: "The Cutting Crew played on the show in 1985. What is the name of their lead singer?", image_link: 'test4@gmail.com'}),
        knex('questions').insert({id: 20006, question: "Adam Ant won two Ivor Novello awards in 1982. One was for Best selling UK single Stand and Deliver, but what was the other for?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20007, question: "1982 was a big year for pop music as Madonna made her debut. It was also a crazy year for Ozzy Osbourne. He married his manager Sharon Arden. But what was he arrested for in San Antonio, Texas in February of that year?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20008, question: "Culture Club performed three dates in Monte Carlo in 1998. What other 80s British band joined them?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20009, question: "Where are chameleons most commonly found?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20010, question: "How many Chameleon species are there?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20011, question: "In the 80s classic song Karma Chameleon by Culture Club, how many times is the chorus sung?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20012, question: "Complete the lyrics.'That my love was an addiction, when we _____ our love is strong'.", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20013, question: "Complete the lyrics. 'I'm a man who doesn't know how to sell a _______.'", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20014, question: "Complete the lyrics. 'Karma, karma, karma, karma, karma, chameleon, you ____ and go.'", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20015, question: "Complete the lyrics. 'Loving would be easy if your ______ were like my dream; red, gold, and green'.", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20016, question: "Select the correctly punctuated sentence", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20017, question: "Select the correctly punctuated sentence", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20018, question: "Select the correctly punctuated sentence", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20019, question: "All of the following are characteristics of chameleons EXCEPT:", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20020, question: "Native to Tanzania and Kenya, Jackson's chameleons were kept uncaged in the back yard of an American pet shop owner in 1972. These chameleons spread to a wide area and now most Jackson's chameleons that are caught in the wild come from this state. Which state is it?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20021, question: "All of the following statements about panther chameleons are true EXCEPT:", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20022, question: "All of the following statements about chameleons are true EXCEPT:", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20023, question: "Which species is the largest among chameleons?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20024, question: "Which species is the smallest among chameleons?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20025, question: "Which animal is the main predator of chameleons?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20026, question: "The band 'Men at Work' is from where?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20027, question: "What's Madonna's real name?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20028, question: "MTV broadcast their first video in 1981 - what was it?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20029, question: "What's the name of the lead singer of Duran Duran?", image_link: 'test5@gmail.com'}),
        knex('questions').insert({id: 20030, question: "In 1986, thanks to The Bangles, what was America walking like?", image_link: 'test5@gmail.com'})
      ])
    })
}