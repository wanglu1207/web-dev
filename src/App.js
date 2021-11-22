import './App.css'
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";

import {BrowserRouter, Link, Route} from "react-router-dom";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import ProfileReduxExample from "./components/a7/twitter/profile";

import who from "./reducers/who";
import posts from "./reducers/posts";
import ProfilePage from "./components/a7/twitter/profile/profilePage";
import {combineReducers,createStore} from "redux";
import {Provider} from "react-redux";
import tweets from "./reducers/tweets";

// const reducer=combineReducers({tweets:tweets, who, profile})
// const store=createStore(reducer);

function App() {
    return (
        // <Provider store={store}>
            <BrowserRouter>

                {/*<li>*/}
                {/*    <Link to="/a7">A7</Link>*/}
                {/*</li>*/}

                {/*<Route path = "/a7">*/}
                {/*    <page/>*/}
                {/*</Route>*/}



                <Route path={["/a7", "/a7/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/twitter">
                    <Build/>
                </Route>
                {/*<Route path="/a7/edit">*/}
                {/*    <ProfileReduxExample/>*/}
                {/*</Route>*/}

                {/*<Route path="/a7/profile">*/}
                {/*    <ProfilePage/>*/}
                {/*</Route>*/}



                {/*<Route path="/a6/twitter/home" component={HomeScreen}/>*/}
                {/*<Route path="/a6/twitter/explore" component={ExploreScreen}/>*/}

            </BrowserRouter>
        // </Provider>
    );
}
export default App;






// import HelloWorld from "./components/a6/HelloWorld";
// import Practice from "./components/a6/Practice";
// import Build from "./components/a6/Build";

// <div className="container">
//     <Route path="/a6/hello" exact={true}>
//         <HelloWorld/>
//     </Route>
//     <Route  path={["/", "/a6", "/a6/practice"]} exact={true}>
//         <Practice/>
//     </Route>
//     <Route path="/a6/build" exact={true}>
//         <Build/>
//     </Route>
// </div>