import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import App from './App';
import './styles.css';

var mountNode = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App name="Jane" />
  </Provider>,
  mountNode
);
