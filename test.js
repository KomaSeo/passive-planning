import pg from 'pg'
import fs from 'fs'
const API_JSON = fs.readFileSync('./API_JSON');
const API = JSON.parse(API_JSON); 
const { Client } = pg
const client = new Client({
    user : API.databaseID,
    password : API.databasePassword,
    database : "passivePlanning"
})
await client.connect()
 
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()