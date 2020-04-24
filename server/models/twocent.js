var mongoose = require('mongoose');

//Sets database 
var UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is needed"]},
    username: {type: String, required: [true, "Username is needed"]},
    password: {type: String, required: [true, "Password is needed"], minlength: 6},
	_votes: {type: mongoose.Schema.Types.Mixed, ref: 'polls'},
}, {timestamps: true});

var PollSchema = new mongoose.Schema({
    question: {type: String, required: [true, "Please provide a question"]},
    // Will insertMany() 3 answer objects into array to be retrieved later
    answer_one: {type: String, required: [true, "Please provide the first answer"],  minlength: 3},
    answer_two: {type: String, required: [true, "Please provide the second answer"],  minlength: 3},
    answer_three: {type: String, required: [true, "Please provide the third answer"],  minlength: 3},
	_users: {type: mongoose.Schema.Types.Mixed, ref: 'user'},
}, {timestamps: true});

//Get database
// We are setting these Schema in our Models.
mongoose.model('user', UserSchema); 
mongoose.model('poll', PollSchema);