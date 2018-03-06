/**
 * DB Configuration and Connection
 * @exports General/Helper/General
 */

var a = '';

/**
 * This logs the request and reponse. This could be set to off in the .env file
 * @param {object} req - Request Object
 * @param {object} res - Response Object
 * @param {array} data - Additional Data
 */
var logger = function (req, res, data) {
	var Logger = require('../models/logger');
	var logger = new Logger();
	logger.req = {
		"headers": req.headers,
		"url": req.url,
		"method": req.method,
		"params": req.params,
		"query": req.query,
		"body": req.body
	};
	if (process.env.LOG_WITH_RESULTSET == 'no') { //logging the result set
		res.result = '';
	}
	logger.res = res;
	logger.data = data;
	logger.save();
}

module.exports = {
	/**
	 * Function to handle any error reponse of the webservice
	 * @param {object} req - Request Object
	 * @param {object} res - Response Object
	 * @param {string} reason - Reason for developers
	 * @param {string} message - Message for end users
	 * @param {number} code - Code to return (default is 1)
	 * @returns {boolean}
	 * @returns {object} Error Message (Json result)
	 */
	handleError: function (req, res, reason, message, code = 1) {
		//console.log("ERROR("+code+"): " + reason);
		var response = {
			"message": message,
			"errorCode": code
		};
		res.status(200).json(response);
		if (process.env.LOG == 'yes') { //logging
			logger(req, response, [reason, message]);
		}
		return false;
	},

	/**
	 * Function to handle any success reponse of the webservice
	 * @param {object} req - Request Object
	 * @param {object} res - Response Object
	 * @param {string} message - Message
	 * @param {object} result - Resultset
	 * @param {object} additionalData - Additional data to be sent
	 * @returns {object} Message and Resultset (Json result)
	 */
	handleSuccess: function (req, res, message, result, additionalData) {
		var response = {
			"message": message,
			"errorCode": 0,
			"result": result
		};
		for (dataKey in additionalData) {
			response[dataKey] = additionalData[dataKey];
		}
		res.status(200).json(response);
		if (process.env.LOG == 'yes') { //logging
			logger(req, response, [message]);
		}
	}
};