import express from 'express'
import taskRouter from '../task.js'
import morgan from 'morgan';
const port = 3000;
const app = express();
const checkFunction = (req,res,next)=>{
    console.log("work?");
    next()
}
app.use(morgan('tiny'))
app.use('./task',[checkFunction,taskRouter])
app.listen(port,()=>{
    console.log("Test server listened.")
})