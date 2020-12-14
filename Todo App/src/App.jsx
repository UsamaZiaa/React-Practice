import React, { Component } from 'react';

class TodoApp extends Component {
    constructor(){
        super()
        this.state = {
          todos: [],
          value: '',
          editValue: ''
        }
      }
    
      add_todo = () =>{
        var obj = {title: this.state.value, edit: false}
        this.state.todos.push(obj)
        this.setState({
          todos: this.state.todos,
          value: ''
        })
      }
    
	   onKeyDown = (event) => {
       if (event.key === 'Enter') {
           this.add_todo()
       }
      }
	
      delete_todo = (index) =>{
        this.state.todos.splice(index,1)
        this.setState({
          todos: this.state.todos
        })
      }
    
      edit_todo = (index) =>{  
        this.state.todos[index].edit = true
        this.setState({
          todos: this.state.todos
        })
      }
    
      handleChange = (e,index) =>{
        this.state.todos[index].title = e.target.value;
        this.setState({
          todos: this.state.todos
        })
      }
      
      update = (index) =>{
        this.state.todos[index].edit = false
        this.setState({
          todos: this.state.todos
        })
      }

    render() {
        let {todos, value} = this.state;
        return (
            <div>
                <h1>Todo App</h1>
              <input value={value} onChange={(e)=>this.setState({value: e.target.value})} onKeyDown={this.onKeyDown} type="text" placeholder="Enter Todo"/>
              <button onClick={this.add_todo}>Add Item</button>
              <ul>
                {todos.map((v,i)=>{
                  return <li key={i}>
                    {v.edit ? <input value={v.title} type="text" onChange={(e) => this.handleChange(e, i)}/> : v.title}
                    {v.edit ?
                      <button onClick={() => this.update(i)}>Update</button>
                      :
                      <button onClick={() => this.edit_todo(i)}>Edit</button>
                    }  
                  <button onClick={() => this.delete_todo(i)}>Delete</button>
                  </li>
                })}
              </ul>
            </div>
        );
    }
}

export default TodoApp;