var apiController = require('./../controller/twocents.js')

module.exports = function(app) {
    
    console.log("In the server routes")

    app.get('/api/addUser', apiController.addUser),

    app.get('/api/getUser/:id', apiController.getOneUser),

    app.get('/api/removeUser/:id', apiController.removeUser),

    app.get('/api/poll/:id', apiController.getOnePoll),

    app.get('/api/allPolls', apiController.showAllPolls),
	
	app.post('/api/addPoll', apiController.addPoll),

	app.delete('/api/removePoll/:id', apiController.removePoll)


};