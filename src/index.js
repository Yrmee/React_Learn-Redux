import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );



//////////// FIRST 20MIN of tutorial > REDUX
/*
import {createStore} from 'redux';

// STORE >> GLOBALIZED STATE (Big Data Storage)

// ACTION >> NAME TO WHAT THE ACTION IS
// in our case today: ACTION INCREMENT (makeing a counter+1)
// = a function that returns an object.
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// REDUCER >> 
// describes how your actions transform the state into the next state
const counter = (state = 0, action) => {
    switch(action.type){
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
    }
}

let store = createStore(counter); 

// Display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH >> 
// the way of executing the ACTION 
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
