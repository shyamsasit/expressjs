/**
 * Contest Validation
 * @exports Contest/Validation
 */
var generalHelper = require('../helpers/generalHelper');
var _t = require('../translations/' + process.env.LANG + '/contestTrans.json');

module.exports = {
	/**
	 * Validation for the data to be added
	 * @param {Object} req - Request Object
	 * @param {Object} res - Response Object
	 * @return {boolean} False 
	 */
	addValidation: function (req, res) {
		if (!req.body.name) {
			return generalHelper.handleError(req, res, "Invalid Input in name", _t.nameRequired);
		}
		if (!req.body.entry_fees) {
			return generalHelper.handleError(req, res, "Invalid Input in entry fees", _t.entryFeesRequired);
		}
	},

	/**
	 * Validation for the data to be edited
	 * @param {Object} req - Request Object
	 * @param {Object} res - Response Object
	 * @return {boolean} False 
	 */
	editValidation: function (req, res) {
		if (!req.body.name) {
			return generalHelper.handleError(req, res, "Invalid Input in name", _t.nameRequired);
		}
		if (!req.body.entry_fees) {
			return generalHelper.handleError(req, res, "Invalid Input in entry fees", _t.entryFeesRequired);
		}
	}
};