const { NEW_USER_VS, UPDATE_USER_VS } = require('../utils/validationSchemas');
const createError = require('http-errors');

module.exports.validateNewUser = async (req, res, next) => {
  try {
    if (await NEW_USER_VS.validate(req.body)) {
      return next();
    } else {
      next(createError(400, 'Validation Error'));
    }
  } catch (e) {
    next(e);
  }
};

module.exports.validateUpdatedUser = async (req, res, next) => {
  try {
    if (await UPDATE_USER_VS.validate(req.body)) {
      return next();
    } else {
      next(createError(400, 'Validation Error'));
    }
  } catch (e) {
    next(e);
  }
};
