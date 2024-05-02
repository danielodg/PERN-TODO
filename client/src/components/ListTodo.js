import React, {Fragment,  useEffect, useState} from "react";

import EditTodo from "./EditTodo"
//useEffect: makes a fetch request to the restful api every time ListTodos is rendered
const ListTodos = ()=>{
    const [todos, setTodos] = useState([]);
//delete todo function
const deleteTodo = async(id)=>{
    try {
        //templete strings (``) allows you tu put variables inside your strings
        const deleteTodo = await fetch(`http://localhost:3001/todos/${id}`,{method:"DELETE"})
        //.filter it will make appear does todos that fit the condition
 setTodos(todos.filter(todo=>todo.todo_id !== id))
    } catch (err) {
        console.error(err.message)
    }
}

    const getTodos = async()=>{
        try {
            const response = await fetch("http://localhost:3001/todos")
            const jsonData = await response.json()

            setTodos(jsonData);
        } catch (err) {
           console.error(err.message); 
        }
    }
    useEffect(()=>{
        getTodos();
    }, [])

    return <Fragment> 
          <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
x§
      {todos.map(todo =>(
        <tr key ={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditTodo todo ={todo}/></td>
            <td><button class="btn btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
       </table>
    </Fragment>;
};

export default ListTodos;
