/**
 * User Auth Validation
 * @exports UserAuth/Validation
 */
var generalHelper = require('../helpers/generalHelper');
var _t = require('../translations/' + process.env.LANG + '/userAuthTrans.json');
const emailRegEx = /\S+@\S+\.\S+/;

module.exports = {
	/**
	 * Validation for the data to be registered with
	 * @param {Object} req - Request Object
	 * @param {Object} res - Response Object
	 * @return {boolean} False
	 */
	registerValidation: function (req, res) {
		
		if (!req.body.user_name) {
			return generalHelper.handleError(req, res, "Invalid Input in user name", _t.userNameRequired);
		}
		if (!req.body.email) {
			return generalHelper.handleError(req, res, "Invalid Input in email", _t.emailRequired);
		} else {
			if (!emailRegEx.test(req.body.email)) {
				return generalHelper.handleError(req, res, "Invalid email", _t.emailInvalid);
			}
		}
		if (!req.body.password) {
			return generalHelper.handleError(req, res, "Invalid Input in password", _t.passwordRequired);
		}
	},

	/**
	 * Validation for the data to be login with
	 * @param {Object} req - Request Object
	 * @param {Object} res - Response Object
	 * @return {boolean} False 
	 */
	loginValidation: function (req, res) {
		if (!req.body.email) {
			return generalHelper.handleError(req, res, "Invalid Input in email", _t.emailRequired);
		}
		if (!req.body.password) {
			return generalHelper.handleError(req, res, "Invalid Input in password", _t.passwordRequired);
		}
	}
};