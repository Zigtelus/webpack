import React from 'react';
import './index.less';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// @ts-ignore
import App from './components/app.tsx';
import { Provider } from 'react-redux';
// @ts-ignore
import store from './redux/store.ts';

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)