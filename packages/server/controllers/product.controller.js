const { Product } = require('./../models');

module.exports.create = async (req, res, next) => {
  const { body } = req;
  try {
    const createdProduct = await Product.create(body);
    if (createdProduct) {
      return res.status(201).send({ data: createdProduct });
    }
    res.status(400).send('Bad request');
  } catch (err) {
    next(err);
  }
};

module.exports.getById = async (req, res, next) => {};

module.exports.deleteById = async (req, res, next) => {};
