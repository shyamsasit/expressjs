/**
 * Post Validation
 * @exports Post/Validation
 */
var generalHelper = require('../helpers/generalHelper');
var _t = require('../translations/' + process.env.LANG + '/postTrans.json');

module.exports = {
	/**
	 * Validation for the data to be added
	 * @param {Object} req - Request Object
	 * @param {Object} res - Response Object
	 * @return {boolean} False 
	 */
	addValidation: function (req, res) {
		if (!req.body.post_title) {
			return generalHelper.handleError(req, res, "Invalid Input in post title", _t.post_titleRequired);
		}
		if (!req.body.post_description) {
			return generalHelper.handleError(req, res, "Invalid Input in post description", _t.post_descriptionRequired);
		}
		if (!req.body.category) {
			return generalHelper.handleError(req, res, "Invalid Input in category", _t.categoryRequired);
		}
		if (!req.file.filename) {
			return generalHelper.handleError(req, res, "Invalid Input in image", _t.imageRequired);
		}
		
	},

	/**
	 * Validation for the data to be edited
	 * @param {Object} req - Request Object
	 * @param {Object} res - Response Object
	 * @return {boolean} False 
	 */
	editValidation: function (req, res) {
		if (!req.body.post_title) {
			return generalHelper.handleError(req, res, "Invalid Input in post title", _t.post_titleRequired);
		}
		if (!req.body.post_description) {
			return generalHelper.handleError(req, res, "Invalid Input in post description", _t.post_descriptionRequired);
		}
		if (!req.body.category) {
			return generalHelper.handleError(req, res, "Invalid Input in category", _t.categoryRequired);
		}
		if (!req.file.filename) {
			return generalHelper.handleError(req, res, "Invalid Input in image", _t.imageRequired);
		}
	}
};