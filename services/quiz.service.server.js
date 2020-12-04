const quizzesDao = require('../daos/quizzes.dao.server')
const findAllQuizzes = () =>
    quizzesDao.findAllQuizzes()

const findQuizById = (qid) =>
    quizzesDao.findQuizById(qid)

module.exports = {
    findAllQuizzes,
    findQuizById
}

/*let quizzes = require('./quizzes.json')

const findAllQuizzes = () => quizzes
const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId)

module.exports = {
    findAllQuizzes,
    findQuizById
}
*/
