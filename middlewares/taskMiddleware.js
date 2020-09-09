let yup = require('yup');
const { Task } = require('../db');
const { Op } = require('sequelize');

// ========================================================================

// Schema - Create
let schemaCreate = yup.object().shape({
	task: yup.string().required(),
	picture: yup.string(),
	status: yup.number().default(0),
});

// Validation - Create
module.exports.validationCreate = (req, res, next) => {
	// validations here
	console.log('🐞 validationCreate');

	schemaCreate
		.validate(
			{
				task: req.body.task,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
			return next(err);
		});
};

// Check if record exists - Create
module.exports.isTaskExistsCreate = async (req, res, next) => {
	try {
		const task = await Task.findOne({
			where: {
				task: req.body.task,
			},
		});

		if (task) {
			let err = new Error('Task already exists');
			err.field = 'task';
			return next(err);
		}

		next();
	} catch (err) {
		return next(err);
	}
};

// ========================================================================

// Schema - Update
let schemaUpdate = yup.object().shape({
	id: yup.number().required(),
	task: yup.string().required(),
	picture: yup.string(),
	status: yup.number().default(0),
});

// Validation - Update
module.exports.validationUpdate = (req, res, next) => {
	// validations here
	console.log('🐞 validationUpdate');

	schemaUpdate
		.validate(
			{
				id: req.body.id,
				task: req.body.task,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
			return next(err);
		});
};

// Check if record exists - Update
module.exports.isTaskExistsUpdate = async (req, res, next) => {
	try {
		const task = await Task.findOne({
			where: {
				task: req.body.task,
				id: {
					[Op.ne]: req.body.id,
				},
			},
		});

		if (task) {
			let err = new Error('Task already exists');
			err.field = 'task';
			return next(err);
		}

		next();
	} catch (err) {
		return next(err);
	}
};

// ========================================================================

// Schema - Delete
let schemaDelete = yup.object().shape({
	id: yup.number().required(),
});

// Validation - Delete
module.exports.validationDelete = (req, res, next) => {
	// validations here
	console.log('🐞 validationDelete');

	schemaDelete
		.validate(
			{
				id: req.body.id,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
			return next(err);
		});
};
