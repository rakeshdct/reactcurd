import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from "./store";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </BrowserRouter>
);

