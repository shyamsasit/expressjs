/**
 * User Authentication Module
 * @exports UserAuth/Controller
 */

var UserModel = require('../models/user');
var generalHelper = require('../helpers/generalHelper');
var bcryptHelper = require('../helpers/bcryptHelper');
var _t = require('../translations/' + process.env.LANG + '/userAuthTrans.json');
var userAuthValidation = require('../validations/userAuthValidation');
var userAuthDataMapper = require('../dataMappers/userAuthDataMapper');


module.exports = {

    /**
     * User Registration
     * @param {object} req.body - Request object (record's data)
     * @param {object} res - Response object
     */
    register: function (req, res) {
        if (userAuthValidation.registerValidation(req, res) != false) {
            userAuth = userAuthDataMapper.registerData({}, req.body);
            UserModel.findOne({ //find the account
                $or: [{
                    'email': userAuth.email
                },
                    {
                        'user_name': userAuth.user_name
                    }
                ]
            }, '_id email user_name', function (err, userAuthDB) {
                if (err) { //error
                    generalHelper.handleError(req, res, err, _t.invalidRequest);
                } else if (userAuthDB == null) { //can create account
                    var userAuthDB = new UserModel();
                    userAuthDB = userAuthDataMapper.registerData(userAuthDB, req.body);
                    userAuthDB.password = bcryptHelper.encrypt(userAuthDB.password); //encryption
                    userAuthDB.save(function (err) {
                        if (err) {
                            generalHelper.handleError(req, res, err, _t.failedRegistration);
                        } else {
                            var result = userAuthDataMapper.getOneData(userAuthDB);
                            generalHelper.handleSuccess(req, res, _t.userRegistered, result);
                        }
                    });
                } else { //account existing
                    if (userAuthDB.email == userAuth.email) {
                        generalHelper.handleError(req, res, err, _t.emailExists);
                    } else if (userAuthDB.user_name == userAuth.user_name) {
                        generalHelper.handleError(req, res, err, _t.userNameExists);
                    }
                }
            });
        }
    },

    /**
     * User Login
     * @param {object} req.body - Request object (record's data)
     * @param {object} res - Response object
     */
    login: function (req, res) {
        if (userAuthValidation.loginValidation(req, res) != false) {
            userAuth = userAuthDataMapper.loginData({}, req.body);
            UserModel.findOne({ //find the account
                'email': userAuth.email,
                'status': 1
            }, '_id password', function (err, userAuthDB) {
                if (err || userAuthDB == null) {
                    generalHelper.handleError(req, res, err, _t.invalidCredentials);
                } else {
                    if (!bcryptHelper.compare(userAuth.password, userAuthDB.password)) { //password comparison
                        generalHelper.handleError(req, res, err, _t.invalidCredentials);
                    } else {
                        UserModel.findOneAndUpdate({ //update and get the session token
                            '_id': userAuthDB._id
                        }, {
                            $set: {
                                'session_token': userAuth.session_token
                            }
                        }, {
                            new: true
                        }, function (err, userAuthDB) {
                            if (err || userAuthDB == null) {
                                generalHelper.handleError(req, res, err, _t.invalidRequest);
                            } else {
                                var result = userAuthDataMapper.getOneData(userAuthDB);
                                generalHelper.handleSuccess(req, res, _t.userLogin, result);
                            }
                        });

                    }
                }
            });
        }
    },


    /**
     * User Logout
     * @param {object} req.headers - Request object
     * @param {object} res - Response object
     */
    logout: function (req, res) {
        UserModel.findOneAndUpdate({
            'session_token': req.headers.session_key
        }, {
            $set: {
                'session_token': ''
            }
        }, {
            new: true
        }, function (err, userAuthDB) {
            if (err) {
                generalHelper.handleError(req, res, err, _t.invalidRequest);
            } else {
                generalHelper.handleSuccess(req, res, _t.userLogout, {});
            }
        });
    },

    /**
     * User Profile
     * @param {object} req.headers - Request object
     * @param {object} res - Response object
     */
  
    userprofile: function (req, res) {
        UserModel.findOneAndUpdate({
            'session_token': req.headers.session_key
        },
        {
            new: true
        }, function (err, userAuthDB) {
            if (err) {
                generalHelper.handleError(req, res, err, _t.profileFailed);
            } else {
                 var result = userAuthDataMapper.getOneData(userAuthDB);
                 generalHelper.handleSuccess(req, res, _t.profileFetched, result);
            }
        });
    },

    /**
     * User uploadimage
     * @param {object} req.headers - Request object
     * @param {object} res - Response object
     */
    uploadimage: function (req, res) {
          UserModel.findOneAndUpdate({
            'session_token': req.headers.session_key
        }, {
            $set: {
                'image': req.file.filename
            }
        }, {
            new: true
        }, function (err, userAuthDB) {
            if (err) {
                generalHelper.handleError(req, res, err, _t.failedUpload);
            } else {
                generalHelper.handleSuccess(req, res, _t.imageUploaded, {});
            }
        });

    }};