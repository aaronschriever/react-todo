import React from 'react';
import Todo from "./Todo";
function TodoList(props){
    console.log(props.todos);
const todos = props.todos;
const todoList = todos.map((todoItem)=>(
    
        <li key={todoItem.id.toString()}>
        <Todo  key={todoItem.id}  id={todoItem.id} description={todoItem.description} completed={todoItem.completed} handleDelete={props.handleDelete}/> 
        </li>
    
)) 
return (<ul>{todoList}</ul>);
  
}
    

export default TodoList;