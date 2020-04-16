var mongoose = require('mongoose');
var User = mongoose.model('user')
var Poll = mongoose.model('poll')
var bcrypt = require('bcrypt');


module.exports = {

    registerUser: function(req, res) {
        var form_password = req.body.password;
        //Hashes password
        bcrypt.hash(form_password, 10, function(err, hash) {
        if(err) {
            console.log(err);
        } 
        else {
            var user = new User({name: req.body.name, username: req.body.username, password: hash });
            user.save(function(err, data){
                if(err){
                   console.log("We have an error!", err);
               }
               else {
                   console.log(data);
                   console.log('successfully added a user!');
                   res.json(data)
               }
           }); //end of save
         }
        }); //End of bycrpt
    },
    loginUser: function(req, res) {
        console.log("Authenticating User...")
        var _username = req.body.username
        User.findOne({ username: _username }, function(err, user) {
            if (err) {
                console.log("Cannot login...", err)
            } else {
                if (user) {
                    var form_password = req.body.password;
                    var hashed_password = user.password;
                    bcrypt.compare(form_password, hashed_password, function(err, correctPassword) {
                        if (correctPassword) {
                            console.log("Welcome,", user.username, "You're logged in..")
                            req.session.userid = user._id;
                            console.log("SESSION-----------", req.session.userid)
                            //check if the user is logged in
                            req.session.isloggedin = true;
                            res.json(req.session.userid)
                        } else {
                            if (err) {
                                console.log("Incorrect password...please try again")
                            }
                        }
                    })
                }
            }
        })
    },
    getOneUser: function(req, res) {
        console.log("Getting User")
    },
    removeUser: function(req, res) {
        console.log("User removed")
    },

    getOnePoll: function(req, res) {
        console.log("Finding poll..")
    	Poll.findOne({_id: req.params.id}, function(err, data){
        if(err){
           console.log("Returned error", err);
           res.json(err)
        }
        else {
           res.json(data)
        }
     })
    },
    showAllPolls: function(req, res) {
        console.log("Gathering all polls..")
        Poll.find({_id: req.params.id}, function(err, data){
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        });
    },
    addPoll: function(req, res) {
     console.log("Adding poll..", req.body);
	 var poll = new Poll({question: req.body.question, answers: req.body.answers});
	 poll.save(function(err, data){
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    },
   removePoll: function(req, res) {
       console.log("Poll deleted..")
        Poll.remove({_id: req.params.id }, function(err, data) {
            if (err) {
                res.json(err)
            } else {
                res.json(data);
            }
        });
    }
};//End of exports