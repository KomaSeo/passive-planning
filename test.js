import express from 'express'
const app = express()
const port = 3000
const mocked_task1 = {
    name : 'exampleTask',
    generatedDate : new Date().toISOString(),
    ID : 1
}
const mocked_task2 = {
    name : 'exampleTask2',
    generatedDate : new Date().toISOString(),
    ID : 2
}
app.get('/',(req,res,next)=>{
    res.render('Task.ejs',)
})
app.listen(port, ()=>{
    console.log(`listen to port : ${port}.`)
})