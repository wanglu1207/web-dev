import React from "react";
import ReduxExamples from "./ReduxExamples/components";
import {Link} from "react-router-dom";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a7/twitter/home">Build</Link>
            <ReduxExamples/>

        </div>
    )
};

export default Practice;
