
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(knex('answers').insert([
        {id: 12301, 'q_id': 20001, answer: '1982', isCorrect: false},
        {id: 12302, 'q_id': 20001, answer: '1983', isCorrect: true},
        {id: 12303, 'q_id': 20001, answer: '1981', isCorrect: false},
        {id: 12304, 'q_id': 20001, answer: '1984', isCorrect: false},
        {id: 12305, 'q_id': 20002, answer: 'Billie Jean - Michael Jackson', isCorrect: true},
        {id: 12306, 'q_id': 20002, answer: 'Every Breath You Take - The Police', isCorrect: false},
        {id: 12307, 'q_id': 20002, answer: 'Uptown Girl - Billy Joel', isCorrect: false},
        {id: 12308, 'q_id': 20002, answer: 'True - Spandau Ballet', isCorrect: false},
        {id: 12309, 'q_id': 20003, answer: 'Beat It', isCorrect: false},
        {id: 12310, 'q_id': 20003, answer: 'Human Nature', isCorrect: false},
        {id: 12311, 'q_id': 20003, answer: 'Billie Jean', isCorrect: false},
        {id: 12312, 'q_id': 20003, answer: "Wanna Be Startin' Somethin'", isCorrect: true},
        {id: 12313, 'q_id': 20004, answer: 'When Love Cries', isCorrect: true},
        {id: 12314, 'q_id': 20004, answer: 'When Love Takes Over', isCorrect: false},
        {id: 12315, 'q_id': 20004, answer: "This Time I Know it's For Real", isCorrect: false},
        {id: 12316, 'q_id': 20005, answer: "Nick Van Eade", isCorrect: true},
        {id: 12317, 'q_id': 20005, answer: "Nick Van Dyke", isCorrect: false},
        {id: 12318, 'q_id': 20005, answer: "Nick Van Eadie", isCorrect: false},
        {id: 12319, 'q_id': 20005, answer: "Nick Van Eader", isCorrect: false},
        {id: 12320, 'q_id': 20006, answer: "Album Award", isCorrect: false},
        {id: 12321, 'q_id': 20006, answer: "Songwriter of the Year", isCorrect: true},
        {id: 12322, 'q_id': 20006, answer: "International Hit of the Year", isCorrect: false},
        {id: 12323, 'q_id': 20006, answer: "Most Performed Work", isCorrect: false},
        {id: 12324, 'q_id': 20007, answer: "Urinating in the street", isCorrect: false},
        {id: 12325, 'q_id': 20007, answer: "Urinating on the Alamo Cenotaph", isCorrect: true},
        {id: 12326, 'q_id': 20007, answer: "Drunk and disorderly", isCorrect: false},
        {id: 12327, 'q_id': 20007, answer: "Being drunk at The Alamo, a holy and sacred place", isCorrect: false},
        {id: 12328, 'q_id': 20008, answer: "Pet Shop Boys", isCorrect: false},
        {id: 12329, 'q_id': 20008, answer: "Spandau Ballet", isCorrect: true},
        {id: 12330, 'q_id': 20008, answer: "Erasure", isCorrect: false},
        {id: 12331, 'q_id': 20008, answer: "The Human League", isCorrect: true}
      ])
    )})
}
