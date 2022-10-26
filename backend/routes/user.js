import express from 'express';
import userController from '../controllers/userDataController.js';

const userRouter = express.Router();

userRouter.route('/users')
    .post(userController.postUserData);


export default userRouter;
