import React from "react";
// import HelloReduxExampleComponent from "./components/HelloReduxExampleComponent";
import Todos from "./components/Todo";
import {Provider} from "react-redux";
// import hello from "./reducers/hello";
// import todos from "./reducers/todos";
// import {createStore, combineReducers} from "redux";
import ReduxExamples from "./components";
// const reducers = combineReducers({hello, todos})
// const store = createStore(reducers);

const ReduxExamples = () => {
    return(
        // <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                {/*<Todos/>*/}
                {/*<HelloReduxExampleComponent/>*/}
                <ReduxExamples/>
            </div>
        // </Provider>
    );
};
export default ReduxExamples;





// import React from "react";
// import HelloReduxExampleComponent from "./components/HelloReduxExampleComponent";
// import Todos from "./ToDos";
// import hello from "./reducers/hello";
// import todos from "./reducers/todos";
// import {createStore, combineReducers} from "redux";
// import {Provider} from "react-redux";
// const reducers = combineReducers({hello, todos})
// const store=createStore(hello);
//
// const ReduxExamples=()=>{
//     return(
//         <Provider store={store}>
//             <div>
//                 <h2>Redux Examples</h2>
//                 <Todos/>
//                 <HelloReduxExampleComponent/>
//             </div>
//         </Provider>
//     );
// };
//
// export default ReduxExamples;