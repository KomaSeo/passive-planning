
import pg from 'pg'
import fs from 'fs'
import express, { Router } from 'express'

const taskRouter = express.Router();

const API_JSON = fs.readFileSync('./API_JSON');
const API = JSON.parse(API_JSON); 
const { Client } = pg
const client = new Client({
    user : API.databaseID,
    password : API.databasePassword,
    database : "passiveplanning"
})
await client.connect()
 

async function addTask(taskName){
    const currentTime = new Date();
    const generatedtime = currentTime.toISOString();
    const result = await client.query('INSERT INTO tasks (id, name, generatedtime) VALUES (DEFAULT, $1, $2)',[taskName,generatedtime])
    return result;
}


taskRouter.route("/").get((req,res)=>{
    console.log("router Work");
}).post((req,res)=>{

}).delete((req,res)=>{

}).put((req,res)=>{

}).patch((req,res)=>{

})

taskRouter.route("/:id").get(async (req,res)=>{
    const targetId = req.params.id;
    const query = client.query('SELECT * FROM tasks WHERE id=$1', [targetId]);
    query.then((queryResult)=>{
        if(queryResult.rows.length == 0){
            res.status(404).send(`Task with id ${targetId} not found.`);
        }
        res.status(202).send(queryResult.rows[0])
    }).catch((reason)=>{
        console.log(reason);
        res.status(500).send("Unknown internal error found.");
    });
}).post((req,res)=>{

}).delete((req,res)=>{

}).put((req,res)=>{

}).patch((req,res)=>{
    
})


console.log("task.js called")
export default taskRouter
//await addTask("exampleTask")
//await client.end()