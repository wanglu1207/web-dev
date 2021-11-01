import './App.css'
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>

            <Route path="/a6/twitter/home" component={HomeScreen}/>
            <Route path="/a6/twitter/explore" component={ExploreScreen}/>

            <div className="container">
            <Route path="/a6/hello" exact={true}>
                <HelloWorld/>
            </Route>
            <Route  path={["/", "/a6", "/a6/practice"]} exact={true}>
                <Practice/>
            </Route>
            <Route path="/a6/build" exact={true}>
                <Build/>
            </Route>
        </div>
        </BrowserRouter>
    );
}
export default App;



