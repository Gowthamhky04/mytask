const getData = "SELECT * FROM todolist";
const addText="INSERT INTO todolist(id_no,todo_notes,todo_date,to_do_status) VALUES($1,$2,$3,TRUE)";
const getById = "SELECT * FROM todolist WHERE id_no = $1";
const removeById = "DELETE FROM todolist WHERE id_no = $1";
const updateById = "UPDATE todolist SET todo_notes=$1,todo_date=$2 WHERE id_no=$3";
const sortByDate = "SELECT * FROM todolist ORDER BY todo_date ";
const sortByText = "SELECT * FROM todolist ORDER BY todo_notes ";





module.exports={
    getData,addText,getById,removeById,updateById,sortByDate,sortByText
}