import { compose, createStore } from 'redux';
import { rootReducer } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers();

const persistedState = localStorage.getItem('redux-store')
  ? JSON.parse(localStorage.getItem('redux-store') as string)
  : {};

export const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState());
});
