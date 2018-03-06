/**
 * Api Route
 * @exports General/Route
 */
var multer  = require('multer')
var express = require('express');
var router = express.Router();

process.setMaxListeners(Infinity);
/**
 * Middleware
 */
// var middleware = require('../middlewares/apiMiddleware');
// router.use(middleware.authentication);

/**
 * Contest Routes
 */
router.use('/contests', function (req, res, next) {
	var contestController = require('../controllers/contestController');
	router.route('/contests')
		.post(contestController.add) //add
		.get(contestController.getAll); //getall

	router.route('/contests/:id')
		.get(contestController.getOne) //getone
		.put(contestController.update) //update
		.delete(contestController.delete); //delete
	next();
});

var posttUpload = multer({storage: multer.diskStorage({
    destination: function (req, file, callback) { callback(null, './public/uploads');},
    filename: function (req, file, callback) { callback(null, file.fieldname + '-' + Date.now()+file.originalname);}})
}).single('image');


/**
 * Post Routes
 */
router.use('/posts',posttUpload,function (req, res, next) {
	
	var postController = require('../controllers/postController');
	router.route('/posts')
		.post(postController.add) //add
		.get(postController.getAll); //getall

	router.route('/posts/:id')
		.get(postController.getOne) //getone
		.put(postController.update) //update
		.delete(postController.delete); //delete
	next();
});

/**
 * Contact Routes
 */
router.use('/contacts',function (req, res, next) {
	
	var contactController = require('../controllers/contactController');
	router.route('/contacts')
		.post(contactController.add) //add
		.get(contactController.getAll); //getall

	router.route('/contacts/:id')
		.get(contactController.getOne) //getone
		.put(contactController.update) //update
		.delete(contactController.delete); //delete
	next();
});


/**
 * UserAuth Routes
 */
var multipartUpload = multer({storage: multer.diskStorage({
    destination: function (req, file, callback) { callback(null, './public/uploads');},
    filename: function (req, file, callback) { callback(null, file.fieldname + '-' + Date.now()+file.originalname);}})
}).single('image');


router.use('/users/auth',multipartUpload, function (req, res, next) {
	var userAuthController = require('../controllers/userAuthController');
	router.route('/users/auth/register').post(userAuthController.register);
	router.route('/users/auth/login').post(userAuthController.login);
	router.route('/users/auth/userprofile').get(userAuthController.userprofile);
	//router.route('/users/auth/forgot').get(userAuthController.forgot);
	//router.route('/users/auth/reset').put(userAuthController.reset);
	router.route('/users/auth/uploadimage').post(userAuthController.uploadimage);
	router.route('/users/auth/logout').delete(userAuthController.logout);
	next();
});


module.exports = router;