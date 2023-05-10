const express = require('express');
const projectRoutes = require('./src/project/routes');

const app = express();
const port = 4000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.use("/api/project",projectRoutes);

app.listen(port,()=>console.log(`app is running on port ${port}`));