import React from "react";
import Practice from "./Practice";
import Build from "./Build";
import {Route} from "react-router-dom";


const HomeworkSeven=()=>{
    return(
        <>
            <Route path={["/a7", "/a7/practice"]} exact={true}>
                <Practice/>
            </Route>
            <Route path="/a7/twitter">
                <Build/>
            </Route>
        </>
    )
}

export default HomeworkSeven;