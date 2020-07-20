const crypto=require('crypto')
const mongoose=require('mongoose');
const Cryptr = require('cryptr');
const jwt=require('jsonwebtoken')
const puppeteer=require('puppeteer')
const moment=require('moment')
const UserSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:[true,'please add your Username'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add a password'],
        minLength:6,
        maxLength:210,
    },
    number:{
        type:Number,
        default:1,
        required:true
    },
    schedule:{
        type:Object,
        default:'0'
    },
    createdAt: {
        type:Date,
        default: Date.now
    },
    error:{
        type:String
    }
});
const cryptr = new Cryptr('myTotallySecretKey');
UserSchema.pre('save',async function(next) {
    if(!this.isModified('password')){
        next();
    }
    this.password=cryptr.encrypt(this.password)
})
UserSchema.methods.postSchedule=async function(id){
    await getSchedule(this.userId,cryptr.decrypt(this.password))
    try {
        await this.model('User').findOneAndUpdate({userId:id}, {
            schedule: shifts
        });
        weekCounter=0
        return shifts
    } catch (err) {
        console.error(err);
    }

}
//sign jwt and return
UserSchema.methods.getSignedJwtToken=function(){
    return jwt.sign({userId:this.userId},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE
    })
}
//Match user entered password to hashed password
UserSchema.methods.matchPassword=async function(enteredPassword){
    return await cryptr.decrypt(this.password)===enteredPassword
}
//Generate and hash
UserSchema.methods.getResetPasswordToken=function(){
    //generate Token
    const resetToken=crypto.randomBytes(20).toString('hex');

    //Hash token and set tp reset password token field
    this.resetPasswordToken=crypto.createHash('sha256').update(resetToken).digest('hex');
    //set expire
    this.resetPasswordExpire=Date.now()+5*60*1000;
    return resetToken;
}








let shifts={}

function getCurrentWeek() {
    const currentDate = moment();

    const weekStart = currentDate.clone().startOf('isoWeek');

    const days = [];

    for (let i = 0; i <= 6; i++) {
        days.push(moment(weekStart).add(i, 'days').format("L"));
    }
    return days
}
days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
let weekCounter=0

const getSchedule=async (userID,txtPassword)=>{
    shifts={}
    let browser=null
    try {
        browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        const page = await browser.newPage();
        await page.setRequestInterception(true);
        page.on('request', (request) => {
            if (['image', 'stylesheet', 'font', 'script','html'].indexOf(request.resourceType()) !== -1)  request.abort();
            else request.continue();
        });
        await page.goto(`https://www.peoplestuffuk.com/WFMMCDPRD/LoginSubmit.jsp?txtUserID=${userID}&txtPassword=${txtPassword}`);


        for (let i = 0; i < 7; i++) {
            const val = getCurrentWeek()[i]
            const Date = val.split('/')
            const formattedDate = `${Date[2]}${Date[0]}${Date[1]}`
            const [el] = await page.$x(`//*[@id="shift_` + `${formattedDate}"]`);
            const txt = await el.getProperty('textContent')
            const rawTxt = await txt.jsonValue()
            shifts[days[weekCounter]] = rawTxt.replace(/(\r\n|\n| |\t|\r)/gm, "");
            weekCounter++
        }
    }catch (e) {
        // res.send('Wrong username/password')
        console.log(e)
    }finally {
        if (browser) browser.close()

    }
}
module.exports=mongoose.model('User',UserSchema)