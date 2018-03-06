/**
 * Post Module
 * @exports Post/Contorller
 */
var PostModel = require('../models/post');
var generalHelper = require('../helpers/generalHelper');
var _t = require('../translations/' + process.env.LANG + '/postTrans.json');
var postValidation = require('../validations/postValidation');
var postDataMapper = require('../dataMappers/postDataMapper');

/**
 * Default route
 */
// exports.index = function (req, res) {
// 	res.json({
// 		message: 'Root Path.. Please use correct routing'
// 	});
// };

/**
 * Get all posts
 * @param {object} req.query - Request object with request parameters
 * @param {object} res - Response object
 */
exports.getAll = function (req, res) {
	var search = postDataMapper.searchData(req.query);
	PostModel.find({
			'post_title': new RegExp(search.search_text, 'i')
		})
		.select('_id post_title post_description author_id author_name image date category ')
		.limit(Number(search.limit))
		.skip(Number(search.limit * search.page))
		.sort({
			[search.sort_field]: search.sort
		})
		.exec(function (err, postsDB) {
			if (err) {
				generalHelper.handleError(req, res, err, _t.failedGetPosts);
			} else {
				var additionalData = {};
				PostModel.count({
					'post_title': new RegExp(search.search_text, 'i')
				}).exec(function (err, count) {
					if (err) {
						generalHelper.handleError(req, res, err, _t.failedGetPosts);
					} else {
						var result = postDataMapper.getAllData(postsDB);
						additionalData.total_count = count;
						additionalData.total_page = 10;
						if(count>10){
						additionalData.total_page = count/10;
					}
						generalHelper.handleSuccess(req, res, _t.postRetrieved, result, additionalData);
					}
				});
			}
		});
}

/**
 * Get one post by id
 * @param {string} req.param.id Request object (id of the record)
 * @param {object} res - Response object
 */
exports.getOne = function (req, res) {
	PostModel.findById(req.params.id, function (err, postDB) {
		if (err || postDB == null) {
			generalHelper.handleError(req, res, err, _t.failedGetPost);
		} else {
			var result = postDataMapper.getOneData(postDB);
			generalHelper.handleSuccess(req, res, _t.postRetrieved, result);
		}
	});
}


/**
 * Add a post
 * @param {object} req.body - Request object (record's data)
 * @param {object} res - Response object
 */
exports.add = function (req, res) {
	if (postValidation.addValidation(req, res) != false) {
		var postModel = new PostModel();
		postModel = postDataMapper.addData(postModel, req.body,req.file);
		postModel.save(function (err) {
			if (err) {
				generalHelper.handleError(req, res, err, _t.failedAddPost);
			} else {
				generalHelper.handleSuccess(req, res, _t.postAdded, {
					'id': postModel._id
				});
			}
		});
	}
}


/**
 * Update a post
 * @param {string} req.param.id Request object (id of the record)
 * @param {object} req.body - Request object (record's data)
 * @param {object} res - Response object
 */
exports.update = function (req, res) {
	if (postValidation.editValidation(req, res) != false) {
		post = postDataMapper.editData({}, req.body,req.file);
		PostModel.findOneAndUpdate({
			'_id': req.body.id
		}, {
			$set: post
		}, {
			new: true
		}, function (err, postDB) {
			if (err || postDB == null) {
				generalHelper.handleError(req, res, err, post);
			} else {
				generalHelper.handleSuccess(req, res, _t.postUpdated, {});
			}
		});
	}
}

/**
 * Delete a post
 * @param {string} req.param.id Request object (id of the record)
 * @param {object} res - Response object
 */
exports.delete = function (req, res) {
	PostModel.remove({
		_id: req.params.id
	}, function (err, postDB) {
		if (err) {
			generalHelper.handleError(req, res, err, _t.failedDeletePost);
		} else {
			generalHelper.handleSuccess(req, res, _t.postDeleted, postDB);
		}
	});
}