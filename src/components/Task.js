import React ,{useState,useRef} from 'react';
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import {useDispatch} from "react-redux"
import * as action from '../actions';

const Task = (props) => {
    const dispatch=useDispatch()
    const inputRef = useRef(true);

    const [disabled,setDisabled]= useState(true)
    
      const doneTodo=(id,e)=>{
        dispatch(action.taskDone(id))
      }
    const updateTodo =(id,value,e)=>{
      if (e.key === 'Enter') {

        dispatch(action.taskUpdated(id,value) )
        setDisabled (true );     
      }
      

    }
      const deleteTodo= (id)=>{
        dispatch(action.taskDeleted(id))
      }

    return (
      
        <li
        key={props.todoItem.id}
        className="card"
      >
        <textarea
          ref={inputRef}
          disabled={disabled}
          defaultValue={props.todoItem.description}
          onKeyPress={(e)=>updateTodo(props.todoItem.id, inputRef.current.value, e)}
        />
        <div className="btns">
          <button  onClick={() => setDisabled(!disabled)}>
            <AiFillEdit />
          </button>
          {props.todoItem.isDone=== false &&(
            <button
                style={{ color: "green" }}
                onClick={(e) => doneTodo(props.todoItem.id, e)}
            >
            <IoCheckmarkDoneSharp />
            </button>
        )}
          <button
            style={{ color: "red" }}
            onClick={() => deleteTodo(props.todoItem.id)} 
            >
    
            <IoClose />
          </button>
  
        </div>
        {props.todoItem.isDone &&<span className="completed">done</span>}
        
      </li>
    )
};
export default  Task;