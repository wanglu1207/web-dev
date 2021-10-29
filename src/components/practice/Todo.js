import React from "react";
import todos from "./todos.json";


const Todo = (
    {
        todos=[
            {title:'todo1'},
            {title:'todo2'},
            {title:'todo3'},
            {title:'todo4'},
        ]
    })=>{
    return(
        <div>
            <h1>ToDo</h1>
            <ul>
                {
                    todos.map((todo)=>{
                        return(<li>{todo.title}</li>)
                    })
                }
                <li>Buy the milk</li>
                <li>Pick up the kids</li>
                <li>Walk the dogs</li>
                <li>Make dinner</li>
            </ul>
        </div>
    );
}

export default Todo;