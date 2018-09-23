import React, { Component } from 'react';

function TodoEntry(props) {
  
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" placeholder="enter Todo here" onChange={props.handleChange} value={props.todoDescription}/>
                <button type="submit" onSubmit={props.handleAdd}>Add</button>
            </form>
        </div>
    )
}
export default TodoEntry;