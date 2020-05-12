var apiController = require('./../controller/twocents.js')

module.exports = function(app) {
    
    app.post('/api/register', apiController.registerUser),
    
    app.post('/api/login', apiController.loginUser),

    app.get('/api/removeUser/:id', apiController.removeUser),

    app.get('/api/poll/:id', apiController.getOnePoll),

    app.get('/api/allPolls', apiController.showAllPolls),
	
	app.post('/api/createPoll/:id', apiController.createPoll),

    app.get('/api/getMyPolls/:id', apiController.getThisUsersPolls),

    app.put('/api/vote/:id', apiController.addVoteToPoll),
    
    app.delete('/api/deletePoll/:id', apiController.removePoll)

}; 