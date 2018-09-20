import React, { Component } from 'react';
//import Todo from './Todo';
import TodoList from './TodoList';

 class TodoListContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {error: null,
        isLoaded: false,
            todos: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount(){
 this.fetchTodos();
}
fetchTodos() {
  let url = 'http://localhost:3001/todos';
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

handleDelete(id, e){
  console.log('this is:', this);
 // console.log("id: " + id);
 console.log("e" + e);
 
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
 // console.log('about to fetch todos');
 
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
          <TodoList todos={this.state.todos} handleDelete={this.handleDelete}/>
        </div>
      );
    }
  }
}
export default TodoListContainer;