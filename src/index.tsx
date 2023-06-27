import React from 'react';
import './index.less';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/index.tsx';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { watchLoadData } from './redux/sagas.ts';
import { rootReducer } from './redux/index.ts';

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