import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

const defaultState = [
  {id:1,name:"Max", phoneNamber:"063738233"},
  {id:2,name:"Max", phoneNamber:"063738233"},
  {id:3,name:"Max", phoneNamber:"063738233"},
]

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case value:
      
  
    default:
      return state
  }
}

const store = createStore()

ReactDOM.render(
    <App />,
  document.getElementById('root')
);