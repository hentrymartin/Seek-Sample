import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Routes from './routes';
import reducer from './reducers';
import './public/scss/App.scss';
import 'react-select/dist/react-select.css';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
	
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);