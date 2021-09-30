const express = require('express');
const authController = require('../controllers/auth/authController');
const userController = require('../controllers/auth/userController')


const router = express.Router();


router.post('/user/signup', authController.signup);
router.post('/user/login', authController.login);
router.get('/user/logout', authController.logout);
router.post('/user/verificationUser', authController.verifyUser);


router.post('/user/forgotPassword', authController.forgotPassword);
router.patch('/user/resetPassword/:token', authController.resetPassword);

router.get('/user/Profile', userController.userProfile);

router.get('/user/myProfile/:id', userController.myProfile)
// router.get('/user/myProfile/:id', authController.protect
//     , userController.myProfile)

router.patch('/user/updateMe', authController.protect
    , userController.uploadUserPhoto
    , userController.updateMe);





router.patch('/user/updatePassword', authController.protect, authController.updatePassword);


module.exports = router;
