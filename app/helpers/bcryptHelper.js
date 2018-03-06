/**
 * Bcrypt Helper
 * @exports General/Helper/Bcrypt
 */

var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
	/**
	 * Function to generate bcrypted password
	 * @param {string} password - Plain password
	 * @returns {string} encrypted password
	 */
	encrypt: function (password) {
		var salt = bcrypt.genSaltSync(saltRounds);
		return bcrypt.hashSync(password, salt);
	},


	/**
	 * Function to compare bcrypted password
	 * @param {string} password - Plain password
	 * @param {string} encPassword - Encrypted password
	 * @returns {boolean}
	 */
	compare: function (password, encPassword) {
		return bcrypt.compareSync(password, encPassword);
	}
};