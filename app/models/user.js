/**
 * User Model
 * @exports User/Model
 */

var mongoose = require('mongoose');
mongoose.set('debug', false);
var Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
	user_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	fname: {
		type: String
	},
	lname: {
		type: String
	},
	image: {
		type: String
	},
	session_token: {
		type: String
	},
	status: {
		type: Number,
		required: true,
		default: '1',
		enum: ['0', '1', '2']
	}
});

module.exports = mongoose.model('users', UserSchema);