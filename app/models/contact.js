/**
 * Contact Model
 * @exports Contact/Model
 */

var mongoose = require('mongoose');
mongoose.set('debug', false);
var Schema = mongoose.Schema;

/**
 * Contact Schema
 */
var ContactSchema = new Schema({
	contact_name: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
	contact_email: {
		type: String,
		required: true
	},
	subject: {
		type: String,
		required: true
	},
	date: {
		type: Date, 
		default: Date.now
	}
});

module.exports = mongoose.model('contacts', ContactSchema);