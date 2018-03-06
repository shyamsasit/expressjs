/**
 * Post Model
 * @exports Post/Model
 */

var mongoose = require('mongoose');
mongoose.set('debug', false);
var Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
	post_title: {
		type: String,
		required: true
	},
	post_description: {
		type: String,
		required: true
	},
	author_id: {
		type: String,
		required: true
	},
	author_name: {
		type: String,
		required: true
	},
	date: {
		type: Date, 
		default: Date.now
	},
	image: {
		type: String
	},
	category: {
		type: String,
		required: true,
		default: 'Food',
		enum: ['Food', 'Travel', 'Lifestyle']
	}
});

module.exports = mongoose.model('posts', PostSchema);