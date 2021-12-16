import APIExamples from "./APIExamples";
import {Link} from "react-router-dom";
import MovieApiClient from "./APIExamples/MovieApiClient";
const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            {/*<Link to="/a8/twitter/home">Build</Link>*/}
            <APIExamples/>
            <MovieApiClient/>
        </div>
    )
};
export default Practice;

