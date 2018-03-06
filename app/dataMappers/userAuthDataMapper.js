/**
 * user Auth Data Mapper
 * @exports UserAuth/DataMapper
 */
var crypto = require('crypto');
var timeStamp = Math.round((new Date()).getTime() / 1000);

module.exports = {
    /**
     * Data Mapping for Register functionality
     * @param {Object} userAuth - Data Schema Object
     * @param {Object} requestData - Request Body Object
     * @return {Object} Updated user object
     */
    registerData: function (userAuth, requestData) {
        userAuth.user_name = requestData.user_name;
        userAuth.email = requestData.email;
        userAuth.password = requestData.password;
        userAuth.session_token = crypto.randomBytes(8).toString('hex') + timeStamp;
        return userAuth;
    },

    /**
     * Data Mapping for Login functionality
     * @param {Object} userAuth - Data Schema Object
     * @param {Object} requestData - Request Body Object
     * @return {Object} Updated user object
     */
    loginData: function (userAuth, requestData) {
        userAuth.email = requestData.email;
        userAuth.password = requestData.password;
        userAuth.session_token = crypto.randomBytes(8).toString('hex') + timeStamp;
        return userAuth;
    },

    /**
     * Data Mapping for Register/Login functionality
     * @param {Object} resultSet - Resultset
     * @return {Object} Updated result object
     */
    getOneData: function (resultSet) {
        row = {};
        //row.id = resultSet._id;
        row.email = resultSet.email;
        row.user_name = resultSet.user_name;
        row.session_token = resultSet.session_token;
        row.image = resultSet.image;
        return row;
    },
};