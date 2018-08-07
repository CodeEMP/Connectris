import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root')

render(
  <Provider store={store}>
      <div>
        <App />
      </div>
  </Provider>,
  target
)
registerServiceWorker();
