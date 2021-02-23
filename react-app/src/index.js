import React from 'react';
import { Provider} from 'react-redux'; 
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { ModalProvider } from './context/Modal.js';
import configureStore from './Store'
import './index.css';
import App from './App';
import { ModalProvider } from './Context/Modal';

const store = configureStore()

function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
