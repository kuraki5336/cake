import createSagaMiddleware from "redux-saga";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { gCommon } from "./storePublic";
import myApi from "./sagaAPI";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    /** 共用 */
    gCommon,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(myApi);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
