var apiController = require('./../controller/twocents.js')

module.exports = function(app) {
    
    console.log("In the server routes")

    app.get('/api/poll', apiController.getOnePoll),

    app.get('/api/allPolls', apiController.showAllPolls),
	
	app.post('/api/addPoll', apiController.addPoll),

	app.delete('/api/removePoll/:id', apiController.removePoll)


};