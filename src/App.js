import './App.css'
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeworkSix from "./components/a6/HomeworkSix";
import HomeworkSeven from "./components/a7";
import HelloApiClient from "./components/a8/Practice/APIExamples/HelloApiClient";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";
import who from "./reducers/who";
import HomeworkEight from "./components/a8";



function App() {
    return (
            <BrowserRouter>

                <li>
                    <Link to="/a6">A6</Link>
                </li>

                <li>
                    <Link to="/a7">A7</Link>
                </li>

                <li>
                    <Link to="/a8">A8</Link>
                </li>
                <div className="container">
                <Route path="/a6/">
                    <HomeworkSix/>
                </Route>

                <Route path = "/a7">
                    <HomeworkSeven/>
                </Route>

                <Route path = "/a8">
                    <HomeworkEight/>
                </Route>
                </div>
                <li>
                    <Link to="/a8/practice">A8</Link> | <Link to="/a8/twitter/home">Build</Link>
                </li>

            </BrowserRouter>
    );
}
export default App;
