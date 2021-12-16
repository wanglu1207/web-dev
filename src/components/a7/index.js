import React from "react";
import Practice from "./Practice";
import Build from "./Build";
import {Route} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import tweets from "../../reducers/tweets";
import who from "../../reducers/who";
import profile from "../../reducers/profile";
import {Provider} from "react-redux";


const reducer=combineReducers({tweets:tweets, who, profile})
const store=createStore(reducer);
const HomeworkSeven=()=>{
    return(
            <Provider store={store}>
                <Route path={["/a7", "/a7/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/twitter">
                    <Build/>
                </Route>
            </Provider>
    )
}

export default HomeworkSeven;