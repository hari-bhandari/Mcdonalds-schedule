const express=require('express');
const {login,getMe,getUsers}=require('../controllers/auth');

const router=express.Router();

const {protect}=require('../middleware/auth')

router.route('/login').post(login)
router.route('/me').get(protect,getMe)
router.route('/getUsers').get(getUsers)
module.exports=router;