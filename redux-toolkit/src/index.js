import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from "./features/user"

const store = configureStore({ //The Redux Store, a global object which stores all reducers
  reducer: {
    user: userReducer,
  }
});

// Reducer = function that takes in information about the current states and an action to perform on that state, then returns the new state

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provider from react-redux used to pass the store */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
