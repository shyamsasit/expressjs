/**
 * Contest Model
 * @exports Contest/Model
 */

var mongoose = require('mongoose');
mongoose.set('debug', false);
var Schema = mongoose.Schema;

/**
 * Contest Schema
 */
var ContestSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	entry_fees: {
		type: Number,
		required: true
	},
	description: String,
	visibility: {
		type: String,
		required: true,
		default: 'Public',
		enum: ['Public', 'Private']
	}
});

module.exports = mongoose.model('contests', ContestSchema);