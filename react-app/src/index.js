import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { ModalProvider } from './context/Modal.js';

import './index.css';
import App from './App';


function Root() {
  return (

    <BrowserRouter>
      {/* <ModalProvider> */}

      <App />
      {/* </ModalProvider> */}
    </BrowserRouter>

  );
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
