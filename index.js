const express = require('express');
const dbConnect = require("./database/mongoConnector");

const app=express();

app.use(express.json())


app.post("/", async (req,resp)=>{
    let result = await dbConnect();
    let response= await result.insertOne(req.body);

    if(response.acknowledged)
    {
        resp.send("data entered");
    }
    else{
        resp.send("error");
    }
})

app.listen(5000)