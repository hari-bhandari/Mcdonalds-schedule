const express =require('express');
const path=require('path')
const dotenv=require('dotenv');
const morgan=require('morgan')
const errorHandler=require('./middleware/error')
const connectDB=require('./config/db')
const mongoSanitize=require('express-mongo-sanitize')
const helmet=require('helmet')
const xss=require('xss-clean')
const rateLimit=require('express-rate-limit');
const hpp=require('hpp')
const cors=require('cors')
const cron = require('cron');
const User=require('./models/User');
const {schedule}=require('./controllers/auth');
//env vars
dotenv.config({path:'./config/config.env'});
//ROutes files
const auth=require('./Routes/auth');

const app= express();
//connect to the server
connectDB();
//Body parser
app.use(express.json());

//sanitize data
app.use(mongoSanitize())

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}
//helmet for headers
app.use(helmet())
//prevent xss attcs
app.use(xss())
//rate limit
const limiter=rateLimit({
    windowMs:10*1000*60,
    max:1000
})
//schedule

app.use(limiter);
//prevent http param pollution
app.use(hpp())
//ebable corse
app.use(cors())
//set static folder
app.use(express.static(path.join(__dirname,'public')))
//Mount router
app.use('/',auth);


//error handler middle ware
app.use(errorHandler)
//node-cron
// '0 */6 * * *'
const cronJob = cron.job('0 0 * * *', async function(){
    await schedule()

});
cronJob.start();
schedule()

const PORT=process.env.PORT||5000;
const server=app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
//handle unhandled promised rejections

process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});

