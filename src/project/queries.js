const getData = "SELECT * FROM todolist";
const addText="INSERT INTO todolist(text,date) VALUES($1,current_timestamp)";



module.exports={
    getData,addText,
}