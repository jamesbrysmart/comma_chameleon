const testEnv = require('../test-environment')
const db = require('../../../db')

let testDb=null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getQuestions gets all questions', () => {
  const expected = 30
  return db.getQuestions(testDb)
    .then(questions => {
      const actual = questions.length
      expect(actual).toBe(expected) 
    })
    .catch(err => expect(err).toBeNull())
})

test('addScore adds to score array', () => {
  return db.getScores()
    .then(scores => {
      var previous = scores.length
      return db.addScore(testDb)
        .then(() => {
          return db.getScores()
            .then(scores => {
              var actual = scores.length
              var expected = previous + 1
              expect(actual).toBe(expected)
            })
        })
      
    })
})