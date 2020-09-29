var mongoose = require('mongoose');
var User = mongoose.model('user')
var Poll = mongoose.model('poll')
var Answer = mongoose.model('answer')
var bcrypt = require('bcrypt');


module.exports = {

    registerUser: function(req, res) {
        var form_password = req.body.password;
        // Hashes password
        bcrypt.hash(form_password, 10, function(err, hash) {
        if(err) {
            console.log(err);
        } 
        else {
            var user = new User({name: req.body.name, username: req.body.username, password: hash });
            user.save(function(err, data){
                if(err){
                   console.log("We have an error!", err);
                   res.json(err)
               }
               else {
                   console.log(data);
                   console.log('successfully added a user!');
                   res.json(data)
               }
           }); // End of save
         }
        }); // End of bycrpt
    },
    loginUser: function(req, res) {
        console.log("Authenticating User...")
        var _username = req.body.username
        User.findOne({ username: _username }, function(err, user) {
            if (err) {
                console.log("Cannot login...", err)
                res.json(err)
            } else {
                if (user) {
                    var form_password = req.body.password;
                    var hashed_password = user.password;
                    bcrypt.compare(form_password, hashed_password, function(err, correctPassword) {
                        if (correctPassword) {
                            console.log("Welcome,", user.username, "You're logged in..")
                            req.session.userid = user._id;
                            console.log("SESSION-----------", req.session.userid)
                            // Check if the user is logged in
                            req.session.isloggedin = true;
                            res.json(req.session.userid)
                        } else {
                            if (err) {
                                console.log("Incorrect password...please try again")
                                res.json(err)
                            }
                        }
                    })
                } else {
                    console.log("user does not exist")
                    res.json({errors: "User does not exist/Incorrect Password"})
                }
            }
        })
    },
    getOnePoll: function(req, res) {
        console.log("Finding poll..")
    	Poll.findOne({_id: req.params.id}, function(err, data){
        if (err){
           console.log("Returned error", err);
           res.json(err)
        }
        else {
            console.log("POLL located--", data)
           res.json(data)
        }
     })
    },
    showAllPolls: function(req, res) {
        console.log("Gathering all polls..")
        Poll.find({}, function(err, data){
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        });
    }, 
    createPoll: function(req, res) {
        var first_answer = new Answer({answer: req.body.answer_one, vote: 0})
        var second_answer = new Answer({answer: req.body.answer_two, vote: 0})
        var third_answer = new Answer({answer: req.body.answer_three, vote: 0})
        first_answer, second_answer, third_answer.save()
        console.log("ANSWERS", first_answer, second_answer, third_answer)
        var poll = new Poll({question: req.body.question});
        poll.answers.push(first_answer, second_answer, third_answer)
        poll.save(function(err, data){
            console.log("POLL", data)
            if (err) {
                console.log(err)
                res.json({err: "Please provide a question and/or three answers"});
            } else {
                res.json(data);
                var user_id = JSON.parse(req.params.id)
                User.findOneAndUpdate({_id: user_id}, {$push: {_polls: poll}}, {useFindAndModify: false}, function(err, data){
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("Here is the user", data)
                    }
                })
            }
        });
    },
    getThisUsersPolls: function(req, res) {
        var user_id = JSON.parse(req.params.id)
        console.log(user_id)
        User.findById({_id: user_id}, function(err, data){
            if (err) {
                console.log(err)
            } else {
                res.json(data)
            }
        })
    },
    addVoteToPoll: function(req, res) {
        console.log("REQUEST__", req.body.answer)
        var user_choice = req.body.answer
        console.log("answer",req.body.answer)
        // Answers are type string. They must be converted to find the corresponding answer in the db
        user_choice.toString()
        console.log("USER__", user_choice)
        Answer.findOneAndUpdate({_id: user_choice}, {$inc: {vote: 1}}, {new: true}, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log("FOUND IT!!!!!", data)
                res.json(data)
            }
        })
        /*Poll.findById({answers: {_id: user_choice}}, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log("HERE!---", data)
            }
        })*/
    },
    removePoll: function(req, res) {
        console.log("Poll deleted..")
        Poll.deleteOne ({_id: req.params.id }, function(err, data) {
            if (err) {
                console.log("ERR", err)
                res.json(err)
            } else {
                res.json(data);
            }
        });
    }
};//End of exports