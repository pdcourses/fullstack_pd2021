const { Router } = require('express');
const { productController } = require('./../controllers');
const { upload } = require('./../middleware');

const productRouter = Router();

productRouter.route('/').post(productController.create);

productRouter
  .route('/:productId')
  .get(productController.getById)
  .delete(productController.deleteById);

//images
//127.0.0.1:5000/api/products/1/images

productRouter.patch(
  '/:productId/images',
  upload.single('add_image'),
  productController.addImageById
);

module.exports = productRouter;
