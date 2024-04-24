import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan';
import favicon from 'serve-favicon'

import path from 'path';
import url, { fileURLToPath } from 'url';
import fs from 'fs'
import axios from 'axios';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicFolder = path.join(__dirname,"public");

const port = 3000;
const app = express();

const _favicon = favicon(path.join(publicFolder,"favicon.ico"));

const locationList = new Map();
let nextLocationKey = 0;
function getNewLocationKey(){
    const newKey = nextLocationKey;
    nextLocationKey = nextLocationKey + 1;
    return newKey.toString();
}
function updateLocation(location,API_JSON){
    const latitude = location.latitude;
    const longitude = location.longitude;
    axios.get(API_JSON.weatherURL,{
        params : {
            lat : latitude,
            lon : longitude,
            appid : API_JSON.weatherKey
        }
    }).then((response)=>{
        const updatedTIme = new Date();
        location.weatherUpdateTime = updatedTIme;
        location.weatherList = response.data.list
    }).catch((error)=>{
        console.log(error.message);
    })
}

const API_Info_Path = path.join(__dirname,"API_JSON");
const API_JSON_file = fs.readFileSync(API_Info_Path);
const API_JSON = JSON.parse(API_JSON_file);



app.use(_favicon);
app.use(express.static(publicFolder));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended : true}));



app.get("/",(req,res)=>{
    res.render("./index.ejs");
})

app.get("/location/:id",(req,res)=>{
    const targetId = req.params.id;
    const targetLocation = locationList.get(targetId);
    const targetInfo = JSON.stringify(targetLocation);
    res.send(targetInfo);
})
app.post("/location",(req,res)=>{
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const locationName = req.body.locationName
    const newId = getNewLocationKey();
    const newLocation = {
        name: locationName,
        latitude: latitude,
        longitude: longitude,
        id: newId
    };
    locationList.set(newLocation.id, newLocation);
    updateLocation(newLocation,API_JSON);

    res.status(200).redirect('back');
})
app.delete("/location/:id",(req,res)=>{
    const targetId = req.params.id;
    locationList.delete(targetId);
    res.status(200);
})
app.put("/locaiton/:id",(req,res)=>{
    const targetLocation = locationList.get(req.params.id);
    targetLocation.latitude = req.body.latitude;
    targetLocation.longitude = req.body.longitude;
    targetLocation.name = req.body.name;
    updateLocation(newlocation,API_JSON);

    const changedLocationInfoString = JSON.stringify(targetLocation)
    res.status(200).send(changedLocationInfoString)

})
app.patch("/location/:id", (req,res)=>{
    const targetLocation = locationList.get(req.params.id);
    if(req.body.latitude){
        targetLocation.latitude = req.body.latitude;
    }
    if(req.body.longitude){
        targetLocation.longitude = req.body.longitude;
    }
    if(req.body.name){
        targetLocation.name = req.body.name;
    }
    updateLocation(newlocation,API_JSON);

    const changedLocationInfoString = JSON.stringify(targetLocation)
    res.status(200).send(changedLocationInfoString)
})


app.get("/test",(req,res)=>{
    res.render("./AddPosition.ejs");
})
app.listen(port,()=>{
    console.log(`Server is listening to port ${port}.`);
})
