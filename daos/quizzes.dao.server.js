const quizzesModel = require('../models/quizzes/quizzes.models.server')

const findAllQuizzes = () => quizzesModel.find()

const findQuizById = (quizId) =>
    quizzesModel.findById(quizId)

const createQuiz = (quiz) => {}

module.exports = { findAllQuizzes, findQuizById}
