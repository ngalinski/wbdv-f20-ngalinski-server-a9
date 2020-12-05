const questionsModel = require('../models/questions/questions.models.server')
const quizzesModel = require('../models/quizzes/quizzes.models.server')

const findAllQuestions = () => questionsModel.find()

const findQuestionById = (qid) => questionsModel.findById(qid)

const findQuestionsForQuiz = (quizId) =>
    quizzesModel.findById(quizId).populate('questions')
        .then(quiz => quiz.questions)

module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz}
