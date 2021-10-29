import React from "react";

const TodoItem=({
    todo={
        title:'Buy milk',
        status:'COMPLETED',
        done:true
    }
})=>{
    return(
        <li>
            <input type="checkbox" defaultChecked={todo.done}/>
            {todo.title}
            {todo.status}
        </li>
    );
}
export default TodoItem;