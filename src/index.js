import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/layout/App';
import { Provider } from 'react-redux';
import store from './store/index';
import startMockServer from 'api/mock-server';
import "@cloudscape-design/global-styles/index.css"

// Disable mock server to call the api directly
startMockServer({environment: 'development'})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Enable strict mode in development environment (Note: THIS MAY LEAD TO MULTIPLE API CALLS)
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
