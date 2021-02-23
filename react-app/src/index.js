import React from 'react';
import { Provider} from 'react-redux'; 
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { ModalProvider } from './context/Modal.js';
import configureStore from './Store'
import './index.css';
import App from './App';


function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <ModalProvider> */}

        <App />
        {/* </ModalProvider> */}
      </BrowserRouter>
    </Provider>

  );
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
