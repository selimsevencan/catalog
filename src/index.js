import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// relative import
import Store from './store';
import App from './App';
import './index.css';
import data from './data/products.json';

const StoreInstance = Store({ product: data });

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
