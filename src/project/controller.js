const pool = require('../../db');
const queries = require("./queries");


const getData = async function(req,res){
    try{
        pool.query(queries.getData,(error,result)=>{
            res.status(200).json(result.rows);
        })
    }
    catch(err){
        console.log("err");
    }
};


const sortByDate = async function(req,res){
    
      try{ pool.query(queries.sortByDate,(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    })} 
    catch(err){
        console.log(err);
    }
    };
    

const sortByText =async function(req,res){
    
       try{
        pool.query(queries.sortByText,(error,result)=>{
            if(error) throw error;
            res.status(200).json(result.rows);
        })
       } catch(err){
        console.log(err);
       }
    };
    


const addText = async function(req,res){
    try{
        const{id_no,todo_notes,todo_date} = req.body;
    
        pool.query(queries.addText,[id_no,todo_notes,todo_date],(error,results)=>{
            if(error) throw error;
           res.status(201).send("student created successfully!");
        }) 
    }catch(err){
        console.log(err);
    }
    
    }
    

const  getById= async function(req,res){
    try{
        const id_no = parseInt(req.params.id_no);
        pool.query(queries.getById,[id_no],(error,results)=>{
            const noStudentFound = !results.rows.length;
            if(noStudentFound){
                res.send("student does not exist in the table");
            }
            pool.query(queries.getById,[id_no],(error,results)=>{
                if(error) throw error;
                res.status(200).json(results.rows);
            })
        });
    }catch(err){
        console.log(err);
    }
    
};


  const removeById = async function(req,res){
    try{
        const id_no = parseInt(req.params.id_no);
        pool.query(queries.getById,[id_no],(error,results)=>{
            const noStudentFound = !results.rows.length;
            if(noStudentFound){
                res.send("student does not exist in the table");
            }
            pool.query(queries.removeById,[id_no],(error,results)=>{
                if(error) throw error;
                res.status(200).send("student table deleted successfully");
            })
        });
    }catch(err){
        console.log(err);
    }
    
};
    
const updateById = async function(req,res){
    try{
        const id_no = parseInt(req.params.id_no);
        const{todo_notes,todo_date}=req.body;
    
        pool.query(queries.getById,[id_no],(error,results)=>{
            const noDataFound = !results.rows.length;
            if(noDataFound){
                res.send("data is not found");
            }
            pool.query(queries.updateById,[todo_notes,todo_date,id_no],(error,results)=>{
                if(error) throw error;
                res.status(200).send("updated sucessfully!");
            })
        })
    }catch(err){
        console.log(err);
    }
    
}

// async function todolist(){
//     try{
//         console.log("async learning");
//         let a=await removeById;
//         return a;
//     }
//     catch(err){
//          console.log(err);
//     }
// }
// todolist();

module.exports={
    getData,addText,getById,removeById,updateById,sortByDate,sortByText
}