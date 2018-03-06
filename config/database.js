/**
 * DB Configuration and Connection
 * @exports General/DB
 */
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
}); // connect to our database
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("DB connection success");
});

//module.exports = db;