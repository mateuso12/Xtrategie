import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

