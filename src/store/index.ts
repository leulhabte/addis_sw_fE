import { appReducer } from "./reducers/statesReducer";
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { mainSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(appReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(mainSaga)