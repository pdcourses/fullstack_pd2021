const { Router } = require('express');
const productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');
const router = Router();
router.use('/products', productRouter);
router.use('/users', userRouter);
module.exports = router;
