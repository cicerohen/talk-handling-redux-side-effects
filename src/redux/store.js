import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import * as modules from "./modules";

const getReducers = () =>
  Object.keys(modules).reduce((acc, curr) => {
    const example = modules[curr];
    if (example.reducers && example.reducers.reducer) {
      acc[example.constants.default] = example.reducers.reducer;
    }
    return acc;
  }, {});

const runSagas = sagaMiddleware =>
  Object.keys(modules).map(key => {
    const example = modules[key];
    if (example.sagas) {
      return sagaMiddleware.run(example.sagas);
    }
  });

export const createReduxStore = () => {
  const initialState = {};
  const middlewares = [];
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middlewares));
  const enhancer = composeWithDevTools(...enhancers);
  const store = createStore(
    combineReducers(getReducers()),
    initialState,
    enhancer
  );
  runSagas(sagaMiddleware);
  return store;
};
