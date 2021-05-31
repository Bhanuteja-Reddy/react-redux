import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { LoginReducer } from './redux-store/Login/loginReducer';

import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  login: LoginReducer,
  // form: formReducer.plugin({
  //   journey: (state, action) => { // <------ 'account' is name of form given to reduxForm()
  //     switch (action.type) {
  //       case 'ACCOUNT_SAVE_SUCCESS':
  //         return undefined; // <--- blow away form data
  //       default:
  //         return state;
  //     }
  //   },
  // }),
  // account,
  // navigate,
  // screen2,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
