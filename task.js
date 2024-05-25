

function HandleTask(app,sqlServer){
    app.post("/task",async(req,res)=>{
        const taskName = req.body.name;
        const taskTime = new Date().toISOString().slice(0, 19).replace('T', ' ');;
        const insertion_command = `insert into tasks value(${taskName}, ${taskTime})`
        const res = await sqlServer.query(insertion_command)
        res.status(202).send("complete");
    })
}