/**
 * Contact Module
 * @exports Contact/Contorller
 */
var ContactModel = require('../models/contact');
var generalHelper = require('../helpers/generalHelper');
var _t = require('../translations/' + process.env.LANG + '/contactTrans.json');
var contactValidation = require('../validations/contactValidation');
var contactDataMapper = require('../dataMappers/contactDataMapper');

/**
 * Default route
 */
// exports.index = function (req, res) {
// 	res.json({
// 		message: 'Root Path.. Please use correct routing'
// 	});
// };

/**
 * Get all contacts
 * @param {object} req.query - Request object with request parameters
 * @param {object} res - Response object
 */
exports.getAll = function (req, res) {
	var search = contactDataMapper.searchData(req.query);
	ContactModel.find({
			'contact_title': new RegExp(search.search_text, 'i')
		})
		.select('_id contact_name message contact_email subject date')
		.limit(Number(search.limit))
		.skip(Number(search.limit * search.page))
		.sort({
			[search.sort_field]: search.sort
		})
		.exec(function (err, contactsDB) {
			if (err) {
				generalHelper.handleError(req, res, err, _t.failedGetContacts);
			} else {
				var additionalData = {};
				ContactModel.count({
					'contact_name': new RegExp(search.search_text, 'i')
				}).exec(function (err, count) {
					if (err) {
						generalHelper.handleError(req, res, err, _t.failedGetContacts);
					} else {
						var result = contactDataMapper.getAllData(contactsDB);
						additionalData.total_count = count;
						additionalData.total_page = 10;
						if(count>10){
						additionalData.total_page = count/10;
					}
						generalHelper.handleSuccess(req, res, _t.contactRetrieved, result, additionalData);
					}
				});
			}
		});
}

/**
 * Get one contact by id
 * @param {string} req.param.id Request object (id of the record)
 * @param {object} res - Response object
 */
exports.getOne = function (req, res) {
	ContactModel.findById(req.params.id, function (err, contactDB) {
		if (err || contactDB == null) {
			generalHelper.handleError(req, res, err, _t.failedGetContact);
		} else {
			var result = contactDataMapper.getOneData(contactDB);
			generalHelper.handleSuccess(req, res, _t.contactRetrieved, result);
		}
	});
}


/**
 * Add a contact
 * @param {object} req.body - Request object (record's data)
 * @param {object} res - Response object
 */
exports.add = function (req, res) {
	if (contactValidation.addValidation(req, res) != false) {
		var contactModel = new ContactModel();
		contactModel = contactDataMapper.addData(contactModel, req.body);
		contactModel.save(function (err) {
			if (err) {
				generalHelper.handleError(req, res, err, _t.failedAddContact);
			} else {
				generalHelper.handleSuccess(req, res, _t.contactAdded, {
					'id': contactModel._id
				});
			}
		});
	}
}


/**
 * Update a contact
 * @param {string} req.param.id Request object (id of the record)
 * @param {object} req.body - Request object (record's data)
 * @param {object} res - Response object
 */
exports.update = function (req, res) {
	if (contactValidation.editValidation(req, res) != false) {
		contact = contactDataMapper.editData({}, req.body);
		ContactModel.findOneAndUpdate({
			'_id': req.body.id
		}, {
			$set: contact
		}, {
			new: true
		}, function (err, contactDB) {
			if (err || contactDB == null) {
				generalHelper.handleError(req, res, err, _t.failedUpdateContact);
			} else {
				generalHelper.handleSuccess(req, res, _t.contactUpdated, {});
			}
		});
	}
}

/**
 * Delete a contact
 * @param {string} req.param.id Request object (id of the record)
 * @param {object} res - Response object
 */
exports.delete = function (req, res) {
	ContactModel.remove({
		_id: req.params.id
	}, function (err, contactDB) {
		if (err) {
			generalHelper.handleError(req, res, err, _t.failedDeleteContact);
		} else {
			generalHelper.handleSuccess(req, res, _t.contactDeleted, contactDB);
		}
	});
}