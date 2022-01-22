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

module.exports.addImageById = async (req, res, next) => {
  const {
    file,
    params: { productId },
  } = req;
  try {
    const updProduct = await Product.findByPk(productId);
    if (updProduct) {
      updProduct.images.push(file.filename);
      const [updRowCount, [updFoundProducts]] = await Product.update(
        updProduct.get(),
        { where: { id: productId }, returning: true }
      );
      return res.status(200).send({ data: updFoundProducts });
    }
    res.status(404).send('Product not found');
  } catch (err) {
    next(err);
  }
};

module.exports.getById = async (req, res, next) => {};

module.exports.deleteById = async (req, res, next) => {};
