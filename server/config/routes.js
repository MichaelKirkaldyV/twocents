var apiController = require('./../controller/twocents.js')

module.exports = function(app) {
    

    app.post('/api/register', apiController.registerUser),
    
    app.post('/api/login', apiController.loginUser),

    app.get('/api/getUser/:id', apiController.getOneUser),

    app.get('/api/removeUser/:id', apiController.removeUser),

    app.get('/api/poll/:id', apiController.getOnePoll),

    app.get('/api/allPolls', apiController.showAllPolls),
	
	app.post('/api/createPoll', apiController.createPoll),

    app.delete('/api/removePoll/:id', apiController.removePoll)
    


};