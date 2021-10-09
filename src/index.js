import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer'
import App from './App';


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
</Provider>,
  document.getElementById('root')
);
