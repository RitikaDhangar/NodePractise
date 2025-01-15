const express=require('express')
const router = express.Router();
const UserController=require('../controller/UserController')
router.post('/add-user', UserController.postuserInfo);
router.post('/login-user', UserController.loginUser);
router.get('/fetch-allusers', UserController.getAllUsers);
module.exports=router