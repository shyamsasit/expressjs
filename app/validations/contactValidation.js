/**
 * Contact Validation
 * @exports Contact/Validation
 */
var generalHelper = require('../helpers/generalHelper');
var _t = require('../translations/' + process.env.LANG + '/contactTrans.json');

module.exports = {
	/**
	 * Validation for the data to be added
	 * @param {Object} req - Request Object
	 * @param {Object} res - Response Object
	 * @return {boolean} False 
	 */
	addValidation: function (req, res) {
		if (!req.body.contact_name) {
			return generalHelper.handleError(req, res, "Invalid Input in contact name", _t.contact_nameRequired);
		}
		if (!req.body.message) {
			return generalHelper.handleError(req, res, "Invalid Input in message", _t.cmessageRequired);
		}
		if (!req.body.contact_email) {
			return generalHelper.handleError(req, res, "Invalid Input in category", _t.contact_emailRequired);
		}
		if (!req.body.subject) {
			return generalHelper.handleError(req, res, "Invalid Input in image", _t.subjectRequired);
		}
		
	},

	/**
	 * Validation for the data to be edited
	 * @param {Object} req - Request Object
	 * @param {Object} res - Response Object
	 * @return {boolean} False 
	 */
	editValidation: function (req, res) {
		if (!req.body.contact_name) {
			return generalHelper.handleError(req, res, "Invalid Input in contact name", _t.contact_nameRequired);
		}
		if (!req.body.message) {
			return generalHelper.handleError(req, res, "Invalid Input in message", _t.cmessageRequired);
		}
		if (!req.body.contact_email) {
			return generalHelper.handleError(req, res, "Invalid Input in category", _t.contact_emailRequired);
		}
		if (!req.body.subject) {
			return generalHelper.handleError(req, res, "Invalid Input in image", _t.subjectRequired);
		}
	}
};