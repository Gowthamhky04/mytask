const pool = require('../../db');
const queries = require("./queries");


const getData = async function(req,res){
    try{
        let result= await pool.query(queries.getData)
            res.status(200).json(result.rows);
        }
    
    catch(err){
        console.log("err");
    }
};


const sortByDate = async function(req,res){
    
      try{ 
        let result = await pool.query(queries.sortByDate)
        res.status(200).json(result.rows);
    }
    catch(err){
        console.log(err);
    }
    };
    

const sortByText =async function(req,res){
    
       try{
       let result = await  pool.query(queries.sortByText)
            res.status(200).json(result.rows);
       } catch(err){
        console.log(err);
       }
    };

    const sortByTextDesc =async function(req,res){
    
        try{
        let result = await  pool.query(queries.sortByTextDesc)
             res.status(200).json(result.rows);
        } catch(err){
         console.log(err);
        }
     };
    


const addText = async function(req,res){
    try{
        const{id_no,todo_notes,todo_date} = req.body;
    
       let result = await  pool.query(queries.addText,[id_no,todo_notes,todo_date])
           res.status(201).send("student created successfully!");
        
    }catch(err){
        console.log(err);
    }
    
    }
    

const  getById= async function(req,res){
    try{
        const id_no = parseInt(req.params.id_no);
        let result1 = await pool.query(queries.getById,[id_no])
            const noStudentFound = !results.rows.length;
            if(noStudentFound){
                res.send("student does not exist in the table");
            }
           let result2 = await pool.query(queries.getById,[id_no])
                res.status(200).json(results.rows);
            }
        
    catch(err){
        console.log(err);
    }
    
};


  const removeById = async function(req,res){
    try{
        const id_no = parseInt(req.params.id_no);
       let result1 = await  pool.query(queries.getById,[id_no])
            const noStudentFound = !results.rows.length;
            if(noStudentFound){
                res.send("student does not exist in the table");
            }
           let result2 = await pool.query(queries.removeById,[id_no])
                if(error) throw error;
                res.status(200).send("student table deleted successfully");
            }
    catch(err){
        console.log(err);
    }
    
};
    
const updateById = async function(req,res){
    try{
        const id_no = parseInt(req.params.id_no);
        const{todo_notes,todo_date}=req.body;
    
       let result1 = await pool.query(queries.getById,[id_no])
            const noDataFound = !results.rows.length;
            if(noDataFound){
                res.send("data is not found");
            }
           let result2 = await pool.query(queries.updateById,[todo_notes,todo_date,id_no])
                res.status(200).send("updated sucessfully!");
            }
        
    catch(err){
        console.log(err);
    }
    
}

module.exports={
    getData,addText,getById,removeById,updateById,sortByDate,sortByText,sortByTextDesc,
}