import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {setupStore} from './store';
import {Summary} from './pages/Summary';
import {GlobalStyle} from './components/UI/GlobalStyle';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <Summary />
  </Provider>
);
