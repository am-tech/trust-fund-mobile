import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

export const createAppStore = (initialState = {}) => {
  const middlewares = [thunkMiddleware];
  const enhancers = [];

  if (__DEV__) {
    const loggerMiddleware = createLogger();

    middlewares.push(loggerMiddleware);
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers,
    ),
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
