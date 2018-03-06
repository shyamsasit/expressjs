/**
 * Logger Model
 * @exports Logger/Model
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Logger Schema
 */
var LoggerSchema = new Schema({
	req: Object,
	res: Object,
	data: Array
});

module.exports = mongoose.model('Logger', LoggerSchema);