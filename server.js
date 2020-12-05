// started from code from A8 page

const express = require('express')
const app = express()

var cors = require('cors');

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
    cors({
             credentials: true,
             origin: true
         })
);
app.options('*', cors());

// TODO: use mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ngalinski:WebDevF2020@cluster0.xmdhr.mongodb.net/whiteboard?retryWrites=true&w=majority',
                 {useNewUrlParser: true, useUnifiedTopology: true});


require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.listen(process.env.PORT || 8080, () =>
    console.log("Server started!")
);
