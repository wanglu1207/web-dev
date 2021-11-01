import React from "react";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {Link} from "react-router-dom";

const Build = () => {
    return(
        <>
            <ExploreScreen/>
            <h1>Build!</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
        </>

    )
};

export default Build;
