// started from code from A8 page

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// TODO: use mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/whiteboard',
                 {useNewUrlParser: true, useUnifiedTopology: true});

//mongoose.connect(process.env.MONGODB_URL,
//                 {useNewUrlParser: true,
//                     useUnifiedTopology: true});

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

app.listen(8080);
