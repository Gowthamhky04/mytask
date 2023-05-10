const pool = require('../../db');
const queries = require("./queries");
//new function
const getData = async function(req,res){
    try{
        pool.query(queries.getData,(error,result)=>{
            res.status(200).json(result.rows);
        })
    }
    catch(error){
        console.log(error);
    }
};


const addText = async function(req,res){
    const{text} = req.body;
    try{
        pool.query(queries.addText,[text],(error,results)=>{
           res.status(201).send("student created successfully!");
          
        })
    }
    catch(err){
            console.log("error");
    }
    

  };
    
module.exports={
    getData,addText,
}