
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

}).post((req,res)=>{

}).delete((req,res)=>{

}).put((req,res)=>{

}).patch((req,res)=>{

})
taskRouter.route("/:id").get((req,res)=>{

}).post((req,res)=>{

}).delete((req,res)=>{

}).put((req,res)=>{

}).patch((req,res)=>{
    
})




await addTask("exampleTask")
await client.end()