const express= require('express');
const app=express();
const port=process.env.PORT || 3000;
app.get('/', (req,res)=>{
    res.send("Hello Developers its Dockerized app");
});
app.listen(port,()=>{
    console.log(`Example app listning on port ${port}`);
});