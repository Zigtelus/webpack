import React from 'react';
import './index.less';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// @ts-ignore
import App from './components/app.tsx';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
// @ts-ignore
import { rootReducer } from './redux/index.ts';
// @ts-ignore
import { watchLoadData } from './redux/sagas.ts';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleWare));
sagaMiddleWare.run(watchLoadData);

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)