import React from 'react'
import './index.less'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app.tsx'


render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
)