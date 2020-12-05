const mongoose = require("mongoose");

const quizzesSchemaServer = mongoose.Schema({
        _id: String,
        title: String,
    }, {collection: "quizzes"})

module.exports = quizzesSchemaServer;
