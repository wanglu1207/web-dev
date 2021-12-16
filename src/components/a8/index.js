import React from "react";
import Practice from "./Practice";
import Build from "./Build";
import {Route} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import posts from "../../reducers/posts";
import who from "../../reducers/who";
import profile from "../../reducers/profile";
import {Provider} from "react-redux";
import PostList from "./Build/PostList";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";
import ProfileScreen from "./Build/twitter/profile/ProfileScreen/ProfileScreen";
import EditProfile from "./Build/twitter/profile/EditProfile/Profile";

const reducer=combineReducers({tweets: posts, profile, who})
const store = createStore(reducer);
const HomeworkEight=()=>{
    return(
        <Provider store={store}>
            <div>
            <Route path={["/a8", "/a8/practice"]} exact={true}>
                <Practice/>
            </Route>
                <Route path="/a8/twitter">
                    <Build/>
                </Route>

            <Route path="/a8/twitter/home" component={HomeScreen}/>
            <Route path="/a8/twitter/explore" component={ExploreScreen}/>
            <Route path="/a8/twitter/profile" component={ProfileScreen}/>
            <Route path="/a8/twitter/edit" component={EditProfile}/>
            </div>
        </Provider>

    )
}

export default HomeworkEight;