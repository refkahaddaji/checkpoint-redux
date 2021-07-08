import React, {useState} from 'react'
import Task from './Task';
import { useSelector } from 'react-redux';
 const ListTask = () => {
    const allTodos=useSelector((state)=> state.todo)
    const [sort, setSort] = useState("unDone");


    return (
        <><div className="displaytodos">
            <div className="buttons">
    
                <button
                onClick={() => setSort("unDone")}
                >
                Undone
                </button>

                <button
                onClick={() => setSort("done")}
                >
                Done
                </button>

                <button
                onClick={() => setSort("all")}
                >
                All
                </button>

            </div>
            <ul>
            {sort==="unDone" &&
            allTodos.map(todoItem => {
                return (todoItem.isDone === false &&
                <Task key={todoItem.id}  todoItem={todoItem}/>)
            })
            }

            {sort==="done" &&
            allTodos.map(todoItem => {
                return (todoItem.isDone === true &&
                <Task key={todoItem.id}  todoItem={todoItem}/>)
            })
            }

            {sort==="all" &&
            allTodos.map(todoItem => {
                return (
                <Task key={todoItem.id}  todoItem={todoItem}/>)
            })
            }
            </ul>
        </div>
        </>
    )
}
export default ListTask;
