import { createSagaMiddleware } from "redux-saga";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { gCommon } from "./storePublic";

import reducer from "./reducer";
import mySaga from "./saga";

// const store = createStore(
//   combineReducers({
//     /** 共用 */
//     gCommon,
//   }),
//   applyMiddleware(thunk)
// );

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export { store };
