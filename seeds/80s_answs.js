
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('80s_answs').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(knex('80s_answs').insert([
        {id: 12301, '80s_q_id': 20001, answer: '1982', isCorrect: false},
        {id: 12302, '80s_q_id': 20001, answer: '1983', isCorrect: true},
        {id: 12303, '80s_q_id': 20001, answer: '1981', isCorrect: false},
        {id: 12304, '80s_q_id': 20001, answer: '1984', isCorrect: false},
        {id: 12305, '80s_q_id': 20002, answer: 'Billie Jean - Michael Jackson', isCorrect: true},
        {id: 12306, '80s_q_id': 20002, answer: 'Every Breath You Take - The Police', isCorrect: false},
        {id: 12307, '80s_q_id': 20002, answer: 'Uptown Girl - Billy Joel', isCorrect: false},
        {id: 12308, '80s_q_id': 20002, answer: 'True - Spandau Ballet', isCorrect: false},
        {id: 12309, '80s_q_id': 20003, answer: 'Beat It', isCorrect: false},
        {id: 12310, '80s_q_id': 20003, answer: 'Human Nature', isCorrect: false},
        {id: 12311, '80s_q_id': 20003, answer: 'Billie Jean', isCorrect: false},
        {id: 12312, '80s_q_id': 20003, answer: "Wanna Be Startin' Somethin'", isCorrect: true},
        {id: 12313, '80s_q_id': 20004, answer: 'When Love Cries', isCorrect: true},
        {id: 12314, '80s_q_id': 20004, answer: 'When Love Takes Over', isCorrect: false},
        {id: 12315, '80s_q_id': 20004, answer: "This Time I Know it's For Real", isCorrect: false},
        {id: 12316, '80s_q_id': 20005, answer: "Nick Van Eade", isCorrect: true},
        {id: 12317, '80s_q_id': 20005, answer: "Nick Van Dyke", isCorrect: false},
        {id: 12318, '80s_q_id': 20005, answer: "Nick Van Eadie", isCorrect: false},
        {id: 12319, '80s_q_id': 20005, answer: "Nick Van Eader", isCorrect: false},
        {id: 12320, '80s_q_id': 20006, answer: "Album Award", isCorrect: false},
        {id: 12321, '80s_q_id': 20006, answer: "Songwriter of the Year", isCorrect: true},
        {id: 12322, '80s_q_id': 20006, answer: "International Hit of the Year", isCorrect: false},
        {id: 12323, '80s_q_id': 20006, answer: "Most Performed Work", isCorrect: false},
        {id: 12324, '80s_q_id': 20007, answer: "Urinating in the street", isCorrect: false},
        {id: 12325, '80s_q_id': 20007, answer: "Urinating on the Alamo Cenotaph", isCorrect: true},
        {id: 12326, '80s_q_id': 20007, answer: "Drunk and disorderly", isCorrect: false},
        {id: 12327, '80s_q_id': 20007, answer: "Being drunk at The Alamo, a holy and sacred place", isCorrect: false},
        {id: 12328, '80s_q_id': 20008, answer: "Pet Shop Boys", isCorrect: false},
        {id: 12329, '80s_q_id': 20008, answer: "Spandau Ballet", isCorrect: true},
        {id: 12330, '80s_q_id': 20008, answer: "Erasure", isCorrect: false},
        {id: 12331, '80s_q_id': 20008, answer: "The Human League", isCorrect: true}
      ])
    )})
}
