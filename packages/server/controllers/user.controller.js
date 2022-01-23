const { User } = require('./../models');
const _ = require('lodash');

module.exports.getUsers = async (req, res, next) => {
  try {
    const foundUsers = await User.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
        //exclude: ['id', 'createdAt', 'updatedAt', 'passwordHash'],
      },
      limit: 5,
    });
    // запаковка массива в поле обьекта data
    res.status(200).send({ data: foundUsers });
  } catch (e) {
    next(e);
  }
};

module.exports.getUserById = async (req, res, next) => {
  try {
    const foundUser = await User.findAll({
      raw: true,
      where: { id: req.params.userId },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      limit: 5,
    });
    res.status(200).send(foundUser);
  } catch (e) {
    next(e);
  }
};

module.exports.createUser = async (req, res, next) => {
  try {
    const createdUser = await User.create(req.body);
    if (createdUser) {
      const sendedUser = _.omit(createdUser.get(), ['createdAt', 'updatedAt']);
      //const sendedUser = _.omit(createdUser.get(), ['id,'hashPassword','createdAt','updatedAt']);
      res.status(200).send(sendedUser);
    } else {
      return next(new Error());
    }
  } catch (e) {
    next(e);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const [updRowsCount, updRows] = await User.update(req.body, {
      where: {
        id: req.params.userId,
      },
      returning: true,
    });
    if (updRowsCount) {
      const data = updRows.get();
      delete data.password;
      return res.status(201).send(data);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const foundUser = await User.destroy({
      where: {
        id: req.params.userId,
      },
    });
    if (foundUser) {
      return res.status(201).send(foundUser);
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
};
