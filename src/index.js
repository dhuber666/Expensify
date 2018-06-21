import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//temoporary
import { setTextFilter } from './actions/index';

import App from './routers/appRouter';
import reducers from './reducers';

const store = createStore(reducers);


/* This is for testing the application out START */
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
})

store.dispatch(setTextFilter('kin'))

/* This is for testing the application out END */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
