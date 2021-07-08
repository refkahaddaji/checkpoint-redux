import ListTask from './components/ListTask';
import React,{useState} from'react';
import {useDispatch} from "react-redux"
import * as action from './actions';

const App = ()=> {
const dispatch=useDispatch()
  const [todo,setTodo]= useState({
    id:'',
    description:"",
    isDone:false
  })
let description=todo.description;
  const handleChange =(e)=>{
    e.persist();
    setTodo(prev=>({...prev,[e.target.name]: e.target.value }))
  }
  
const addTodo =()=>{
  if(todo.description!==''){
    dispatch( action.taskAdded(todo.description) );
    setTodo({
      description:"",
    })
  }
}
  return (
    <>
  
      <div className="App">
      <h1> Todo App</h1> 
    
        <div className="addTodos">

      <input
        name="description"
        type="text"
        value={description}
        onChange={handleChange}
        className="todo-input"
        
      /> 
    
      <button className="add-btn" onClick={addTodo}>
      +
      </button>
    

    </div>
    <br/>

    <ListTask/> 
     </div>
    </>
  );
}

export default App;
