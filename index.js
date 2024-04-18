import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan';
import favicon from 'serve-favicon'

import path from 'path';
import url, { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicFolder = path.join(__dirname,"public");



const port = 3000;
const app = express();

const _favicon = favicon(path.join(publicFolder,"favicon.ico"));
app.use(_favicon);
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({extended : true}));
app.get("/",(req,res)=>{
    res.render("./index.ejs");
})
app.listen(port,()=>{
    console.log(`Server is listening to port ${port}.`);
})