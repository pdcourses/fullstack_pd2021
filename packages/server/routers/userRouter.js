const { Router } = require('express');
const { userController } = require('../controllers');
const userRouter = Router();
const { validate } = require('../middleware');

// http:127.0.0.1:5000/api/users
userRouter
  .route('/')
  .get(userController.getUsers)
  .post(validate.validateNewUser, userController.createUser);

// http:127.0.0.1:5000/api/users/userId

userRouter
  .route('/:userId')
  .get(userController.getUserById)
  .patch(validate.validateUpdatedUser, userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
