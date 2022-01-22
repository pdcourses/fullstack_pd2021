const { Router } = require('express');
const productRouter = require('./routers/productRouter');
const router = Router();
router.use('/products', productRouter);
module.exports = router;
