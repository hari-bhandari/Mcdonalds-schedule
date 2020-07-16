const express=require('express');
const {login,getMe}=require('../controllers/auth');

const router=express.Router();

const {protect}=require('../middleware/auth')

router.route('/login').post(login)
router.route('/me').get(protect,getMe)
module.exports=router;