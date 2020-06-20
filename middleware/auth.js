const jwt=require('jsonwebtoken');
const asyncHandler=require('./async');
const ErrorResponse=require('../utils/errorResponse')
const User=require('../models/User')

//protect routes
exports.protect=asyncHandler(async (req,res,next)=>{
    let token;
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
        token=req.headers.authorization.split(' ')[1];
    }
    else if(req.cookies.token){
        token=req.cookies.token
    }
    //make sure token exists
    if(!token){
        return next(new ErrorResponse('Not' +
            ' authorised to access this page'),401)
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        req.user=await User.findById(decoded.id)
        next();

    }catch (err) {
        return next(new ErrorResponse('Not' +
            ' authorised to access this page'),401)

    }
})

//Grant access to specific roles
exports.authorize=(...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorResponse(`User role ${req.user.role} is unauthorized to access this page `,403))
        }
        next();
    }
}