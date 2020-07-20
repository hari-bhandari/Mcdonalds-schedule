const User=require('../models/User');
const asyncHandler=require('../middleware/async');
const ErrorResponse=require('../utils/errorResponse');
const crypto=require('crypto')

//@desc register a user
//@route POST /api/v1/auth/register
//@access Public
// const register=asyncHandler(async (req,res,next)=>{
//     const {userId,password}=req.body;
//
//     //Create user
//     const user=await User.create({
//         userId,password
//     });
//
// })
//@desc register a user
//@route POST /api/v1/auth/login
//@access Public
exports.login=asyncHandler(async (req,res,next)=>{
    const {userId,password}=req.body;
    //Validate email and password
    if(!userId||!password){
        return next(new ErrorResponse(`Please provide user or a password`,400))
    }
    //check for a user
    let user=await User.findOne({userId}).select('+password');
    if(!user){
        user=await User.create({
            userId,password
        });
        const schedule=await user.postSchedule(userId,res)
        console.log(schedule)
        await handleSchedule(schedule, userId, res)
    }
    else{
        // check if password matches
        const isMatch=await user.matchPassword(password)
        if(!isMatch){
            return next(new ErrorResponse(`Please provide valid user or a password`,401))
        }
    }
    if(!res.headersSent){
        sendTokenResponse(user,200,res)
    }

})


//@desc get current logged in user
//@route GET /api/v1/auth/me
//@access Private
exports.getMe=asyncHandler(async (req,res,next)=>{
    const user=await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        data:user
    })
})
//@desc get all users
//@route GET /getAllUsers
//@access Private
exports.getUsers=asyncHandler(async (req,res,next)=>{
    const users=await User.find()

    res.status(200).json({
        success:true,
        data:users
    })
})
//@desc get all users
//@route GET /getAllUsers
//@access Private
exports.schedule=asyncHandler(async (req,res,next)=>{
        const users=await User.find()
    for (let user of users) {
        const schedule=await user.postSchedule(user.userId)
        await handleSchedule(schedule, user.userId)
    }
})

const sendTokenResponse=(user,statusCode,res)=>{
    //Create web token
    const token=user.getSignedJwtToken();
    const options={
        expires:new Date(Date.now()+process.env.JWT_COOKIE_EXPIRE*24*60*60*1000),
        httpOnly:true,
    }
    if(process.env.NODE_ENV==='production'){
        options.secure=true
    }
    res.status(statusCode).cookie('token',token,options).json({
        success:true,
        token
    })
}
const handleSchedule=asyncHandler(async (data,userId,res)=>{
    if(Object.keys(data).length===7){
        return data
    }
    else {
        await User.findOneAndUpdate({userId:userId},{error:'Authentication Error.Did you reset your password?'},{
            new:true,
            runValidators:true
        })
        if(res) {
            res.status(401).json({error: 'Authentication Failed'})
        }
    }
})