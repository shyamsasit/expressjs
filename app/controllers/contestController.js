/**
 * Contest Module
 * @exports Contest/Contorller
 */
var ContestModel = require('../models/contest');
var generalHelper = require('../helpers/generalHelper');
var _t = require('../translations/' + process.env.LANG + '/contestTrans.json');
var contestValidation = require('../validations/contestValidation');
var contestDataMapper = require('../dataMappers/contestDataMapper');

/**
 * Default route
 */
// exports.index = function (req, res) {
// 	res.json({
// 		message: 'Root Path.. Please use correct routing'
// 	});
// };

/**
 * Get all contests
 * @param {object} req.query - Request object with request parameters
 * @param {object} res - Response object
 */
exports.getAll = function (req, res) {
	var search = contestDataMapper.searchData(req.query);
	ContestModel.find({
			'name': new RegExp(search.search_text, 'i')
		})
		.select('_id name entry_fees description visibility')
		.limit(search.limit)
		.skip(search.limit * search.page)
		.sort({
			[search.sort_field]: search.sort
		})
		.exec(function (err, contestsDB) {
			if (err) {
				generalHelper.handleError(req, res, err, _t.failedGetContests);
			} else {
				var additionalData = {};
				ContestModel.count({
					'name': new RegExp(search.search_text, 'i')
				}).exec(function (err, count) {
					if (err) {
						generalHelper.handleError(req, res, err, _t.failedGetContests);
					} else {
						var result = contestDataMapper.getAllData(contestsDB);
						additionalData.total_count = count;
						generalHelper.handleSuccess(req, res, _t.contestRetrieved, result, additionalData);
					}
				});
			}
		});
}

/**
 * Get one contest by id
 * @param {string} req.param.id Request object (id of the record)
 * @param {object} res - Response object
 */
exports.getOne = function (req, res) {
	ContestModel.findById(req.params.id, function (err, contestDB) {
		if (err || contestDB == null) {
			generalHelper.handleError(req, res, err, _t.failedGetContest);
		} else {
			var result = contestDataMapper.getOneData(contestDB);
			generalHelper.handleSuccess(req, res, _t.contestRetrieved, result);
		}
	});
}


/**
 * Add a contest
 * @param {object} req.body - Request object (record's data)
 * @param {object} res - Response object
 */
exports.add = function (req, res) {
	if (contestValidation.addValidation(req, res) != false) {
		var contestModel = new ContestModel();
		contestModel = contestDataMapper.addData(contestModel, req.body);
		contestModel.save(function (err) {
			if (err) {
				generalHelper.handleError(req, res, err, _t.failedAddContest);
			} else {
				generalHelper.handleSuccess(req, res, _t.contestAdded, {
					'id': contestModel._id
				});
			}
		});
	}
}


/**
 * Update a contest
 * @param {string} req.param.id Request object (id of the record)
 * @param {object} req.body - Request object (record's data)
 * @param {object} res - Response object
 */
exports.update = function (req, res) {
	if (contestValidation.editValidation(req, res) != false) {
		contest = contestDataMapper.editData({}, req.body);
		ContestModel.findOneAndUpdate({
			'_id': req.params.id
		}, {
			$set: contest
		}, {
			new: true
		}, function (err, contestDB) {
			if (err || contestDB == null) {
				generalHelper.handleError(req, res, err, _t.failedUpdateContest);
			} else {
				generalHelper.handleSuccess(req, res, _t.contestUpdated, {});
			}
		});
	}
}

/**
 * Delete a contest
 * @param {string} req.param.id Request object (id of the record)
 * @param {object} res - Response object
 */
exports.delete = function (req, res) {
	ContestModel.remove({
		_id: req.params.id
	}, function (err, contestDB) {
		if (err) {
			generalHelper.handleError(req, res, err, _t.failedDeleteContest);
		} else {
			generalHelper.handleSuccess(req, res, _t.contestDeleted, contestDB);
		}
	});
}