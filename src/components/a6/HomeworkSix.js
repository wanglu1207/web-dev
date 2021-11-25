import React from "react";
import Build from "./Build";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";
import HelloWorld from "./HelloWorld";
import {Route} from "react-router-dom";
import Practice from "./Practice";

const HomeworkSix=()=>{
    return(
        <>
            <Route path="/a6/hello" exact={true}>
                <HelloWorld/>
            </Route>
            <Route  path={["/", "/a6", "/a6/practice"]} exact={true}>
                <Practice/>
            </Route>
            <Route path="/a6/build" exact={true}>
                <Build/>
            </Route>
            <Route path="/a6/twitter/explore" component={ExploreScreen}/>
            <Route path="/a6/twitter/home" component={HomeScreen}/>
        </>
    )
}

export default HomeworkSix;