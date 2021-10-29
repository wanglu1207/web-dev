import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
//import {Link} from "react-router-dom";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    )
};

export default Practice;
// return(
//     <>
//         <h1>Practice!</h1>
//         <Link to="/a6/hello">
//             Hello
//         </Link> |
//         <Link to="/a6/build">
//             Build
//         </Link>
//     </>
// )