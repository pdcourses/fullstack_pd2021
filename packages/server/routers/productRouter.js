const { Router } = require('express');
const { productController } = require('./../controllers');

const productRouter = Router();

productRouter.route('/').post(productController.create);

productRouter
  .route('/:productId')
  .get(productController.getById)
  .delete(productController.deleteById);

module.exports = productRouter;
