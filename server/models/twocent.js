var mongoose = require('mongoose');

//Sets database 
var UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is needed"]},
    username: {type: String, required: [true, "Username is needed"]},
    password: {type: String, required: [true, "Password is needed"], minlength: 6},
	_polls: {type: mongoose.Schema.Types.Mixed, ref: 'polls'},
}, {timestamps: true});

var AnswerSchema = new mongoose.Schema({
    answer: {type: String, required: [true, "Please provide an answer"]},
    vote: {type: Number}
}, {timestamps: true})

var PollSchema = new mongoose.Schema({
    question: {type: String, required: [true, "Please provide a question"]},
    answers: [AnswerSchema],
	_users: {type: mongoose.Schema.Types.Mixed, ref: 'users'},
}, {timestamps: true});

//Get database
// We are setting these Schema in our Models.
mongoose.model('user', UserSchema); 
mongoose.model('poll', PollSchema);
mongoose.model('answer', AnswerSchema);