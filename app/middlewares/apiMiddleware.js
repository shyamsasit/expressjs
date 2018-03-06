/**
 * Authentication in the Middleware
 * @exports General/Middleware
 */
var User = require('../models/user');
var generalHelper = require('../helpers/generalHelper');
var _t = require('../translations/' + process.env.LANG + '/generalTrans.json');

module.exports = {
	/**
	 * Middleware Authentication (api auth and session auth)
	 * @param {Object} req - Request Object
	 * @param {Object} res - Response Object
	 * @param {Object} next - Next Object
	 */
	authentication: function (req, res, next) {
		//console.log(req.headers.api_key);
		if (process.env.RESTAPIKEY != req.headers.api_key) { //checking for general api key
			generalHelper.handleError(req, res, 'API Auth Failed', _t.invalidApiKey);
		} else if (['/users/auth/login', '/users/auth/register', '/users/auth/register/fb', '/users/auth/forgot', '/users/auth/reset'].includes(req.url)) { //routes which don't need session auth
			next();
		} else { //checking for session key of user
			User.count({
				'session_token': req.headers.session_key,
				'status': 1
			}, function (err, userCount) {
				if (err || userCount == 0) {
					generalHelper.handleError(req, res, 'Session Auth Failed', _t.invalidSessionKey);
				} else { //successful authentication
					next();
				}
			});
		}
	}
};