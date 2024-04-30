// require let include modules whithin the project
const express = require("express");
//runs express library
const app =  express();
const cors = require("cors");
const pool = require("./db");

//middleware
//app.use()=for middleware
app.use(cors());
app.use(express.json()); //req.body

//In order to star a server we need to listen a portnumber
app.listen(5000,()=>{
    console.log("server has started on port 5000")
})

//ROUTES

//CREATE A TODO
//async provides await which waits for the function before it continues
app.post("/todos", async(req,res)=>{
    try{
        const {description} = req.body;
        //$1 = variable that specifies the description 
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);

        res.json(newTodo.rows[0])
    }catch (err){
        console.error(err.message);
    }
})
//GET ALL TODOS
app.get("/todos", async(req,res) =>{
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message)
    }
})
//GET A TODO
app.get("/todos/:id",async (req,res)=>{
    try{
        //whatever the client specifies in the url is going to print in the console with the variable id
      const {id} = req.params;
      const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id])

      res.json(todo.rows[0]);
    }catch (err) {
    console.error(err.message)
    }
})
//UPDUATE A TODO
app.put("/todos/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const {description}= req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description, id])
        res.json("Todo was updated")
    } catch (err) {
        console.error(err.message)
    }
})
//DELETE A TODO
app.delete("/todos/:id",async(req,res)=>{
    try {
      const {id} = req.params
      const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id])  
      res.json("Todo was deleted")
    } catch (err) {
        console.log(err.message)
    }
})