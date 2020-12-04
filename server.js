// started from code from A8 page

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// TODO: use mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/whiteboard',
                 {useNewUrlParser: true, useUnifiedTopology: true});

//mongoose.connect("mongodb+srv://dbuser:JnKmUUDr7CLv9g8n@cluster0.xmdhr.mongodb.net/whiteboard?retryWrites=true&w=majority",
//                 {useNewUrlParser: true,
//                     useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.listen(process.env.PORT || 8080);
