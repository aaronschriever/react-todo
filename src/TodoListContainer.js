import React, { Component } from 'react';
//import Todo from './Todo';
import TodoList from './TodoList';
import TodoEntry from './TodoEntry';

 class TodoListContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {error: null,
        isLoaded: false,
            todos: [],
            todoDescription:""
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
 this.fetchTodos();
}


fetchTodos() {
  const url = 'http://localhost:3000/todos';
  fetch(url)
.then(response => response.json())
.then(
(result) => { 
console.log('parsed json', result); // access json.body here

this.setState({
  isLoaded: true,
  todos: JSON.parse(result),
});
},
(error) =>{
this.setState({
isLoaded:true,
error
});
})
}
handleChange(e){
const description = e.target.value;
this.setState({todoDescription: description});
console.log(this.state.todoDescription);
}
handleAdd(e){
  e.preventDefault();
  const url = 'http://localhost:3000/addtodo';
  const description = this.state.todoDescription;
  console.log(JSON.stringify({description: description}));
  fetch(url, {
      method: "POST",
      headers:{
      'Accept': 'application/json',
      'Content-Type': "application/json"
      },body: JSON.stringify({description: description, completed: 0})
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then((response) => {
  console.log('Successful:', response);});
}
handleSubmit(e){
  e.preventDefault();
  this.handleAdd(e);
  this.fetchTodos();
}
handleDelete(id, e){
  console.log('this is:', this);


 
  e.preventDefault();
  let url = 'http://localhost:3000/deletetodo';
  let data = {id: id};
  console.log(JSON.stringify(data));
  fetch(url, {
      method: "POST",
      headers:{
      'Accept': 'application/json',
      'Content-Type': "application/json"
      },body: JSON.stringify({id:id})
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then((response) => {
  console.log('Successful:', response);

 
});
console.log("do we state???");
const todos = this.state.todos.filter(t => t.id !== id);
this.setState({todos: todos});

}
render() {
    const { error, isLoaded, todos } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <TodoEntry handleSubmit={this.handleSubmit} handleAdd={this.handleAdd} todoDescription={this.state.todoDescription} handleChange={this.handleChange}/>
          <TodoList todos={this.state.todos} handleDelete={this.handleDelete}/>
        </div>
      );
    }
  }
}
export default TodoListContainer;