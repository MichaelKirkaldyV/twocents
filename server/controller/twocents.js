var mongoose = require('mongoose');
var User = mongoose.model('user')
var Poll = mongoose.model('poll')


module.exports = {

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
	 var poll = new Poll({question: req.body.question, answer_one: req.body.answer_one, answer_two: req.body.answer_two, answer_three: req.body.answer_three});
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