const mongoose = require("mongoose");

const questionSchema = require("./questions.schema.server");

const questionsModels = mongoose.model(
    'QuestionModel',
    questionSchema
);
module.exports = questionsModels;
