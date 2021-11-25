import './App.css'
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import {BrowserRouter, Link, Route} from "react-router-dom";
import HomeworkSix from "./components/a6/HomeworkSix";
import HomeworkSeven from "./components/a7";
import APIExamples from "./components/a8/Practice/APIExamples";
import MovieApiClient from "./components/a8/Practice/APIExamples/MovieApiClient";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";
import who from "./reducers/who";


const reducer=combineReducers({tweets:tweets, who, profile})
const store=createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>

                <li>
                    <Link to="/a6">A6</Link>
                </li>

                <li>
                    <Link to="/a7">A7</Link>
                </li>

                <div className="container">
                <Route path="/a6/">
                    <HomeworkSix/>
                </Route>

                <Route path = "/a7">
                    <HomeworkSeven/>
                </Route>
                </div>


                {/*<APIExamples/>*/}
                {/*<MovieApiClient/>*/}

            </BrowserRouter>
        </Provider>
    );
}
export default App;
