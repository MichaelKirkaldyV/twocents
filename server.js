var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var cors = require('cors')
var session = require('express-session');

var app = express();

app.use(cors())

//Use & Set
//Alter server.js so that it finds static files within the dist folder of your Angular project
app.use(express.static( __dirname + '/public/dist/twocents' ));

//let's tell body-parser to read JSON, so we'll configure body-parser this way:
app.use(bodyParser.json());

app.use(session({
  secret: 'ghostxinxthexshell',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

require('./server/config/mongoose.js');


// where the routes used to be, we're going to require routes.js
// since routes.js exports a function, server.js will receive that function
// invoke the function we get from the require and pass it app as an argument
require('./server/config/routes.js')(app);


//******************************* */
//This "catch-all" route must be the very last route to be triggered and belongs at the end of the server.js
// this route will be triggered if any of the routes above did not matchcopy
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/src/index.html"))
});

//listen
var server = app.listen(3000, function() {
	console.log(" Express server is istening on port 3000");
});