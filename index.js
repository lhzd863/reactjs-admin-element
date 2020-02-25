import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js"
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'
import {finalReducer} from './redux/reducers/finalReducer.js';

var devTools=window.devToolsExtension?window.devToolsExtension():null
var store;
if(window.devToolsExtension){
    store = createStore(finalReducer,compose(
        applyMiddleware(thunk,logger),
        devTools
    ))
}else{
    store = createStore(finalReducer,compose(
        applyMiddleware(thunk,logger)
    ))
}

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById('root'));

