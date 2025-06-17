const express= require('express');
const app=express();
const port=process.env.PORT || 3000;
const appName= process.env.app_name || "Kubernetes";
app.get('/', (req,res)=>{
    res.send(`Hello Developers its ${appName}`);
});
app.listen(port,()=>{
    console.log(`Example app listning on port ${port}`);
});