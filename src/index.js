import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import storeData from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storeData.store}>
    <PersistGate loading={null} persistor = {storeData.persistor}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
