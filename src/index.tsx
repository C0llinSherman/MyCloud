import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './contexts/global.context';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
   <QueryClientProvider client={client}>
      <BrowserRouter>
          <GlobalContextProvider>
            <App />
          </GlobalContextProvider>
      </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();