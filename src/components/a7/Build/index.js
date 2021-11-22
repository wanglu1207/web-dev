import React from "react";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import {Link, Route} from "react-router-dom";
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";
import profile from "../../../reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ProfileScreen from "./twitter/profile/ProfileScreen/ProfileScreen";
import EditProfile from "./twitter/profile/EditProfile/Profile";

// import ProfilePage from "../twitter/profile/profilePage";
// import ProfileScreen from "../twitter/profile/ProfileScreen";
// import profilesReducer from "../twitter/profile/profilesReducer";

const reducer = combineReducers({
    who,
    tweets,
    profile
})

const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
        <div>
            <Route path={["/", "/a7/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a7/twitter/explore"
                   exact={true} component={ExploreScreen}/>

            <Route path="/a7/twitter/profile"
                   exact={true} component={ProfileScreen}/>

            <Route path="/a7/twitter/edit"
                   exact={true} component={EditProfile}/>



        </div>
        </Provider>
    );
};

export default Build;
