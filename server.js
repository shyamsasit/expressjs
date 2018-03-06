var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var app = express();
require('dotenv').config();

/**Swagger Config BEGIN**/
if (process.env.SWAGGER == 'yes') {
  var swaggerSpec = require('./config/swagger');
  app.get('/api-docs.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.send(swaggerSpec);
  });
}
/**Swagger Config END**/

//var morgan    = require('morgan');
//app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({
  extended: true
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static('public'))
app.use(express.static('uploads'))

require('./config/database'); //DB Connection

var router = require('./app/routes/apiRoute'); //routes
app.use('/api', router); //register routes

/**
 * Run the code on port
 */
var server = app.listen(process.env.PORT, function () {
  var port = server.address().port;
  console.log(new Date());
  console.log("App now running on port", port);
});