import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import contactsReducer from '../redux/contacts/contacts-reducers';
import { contactsApi } from './contacts-Api';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};


const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    contacts: persistReducer(persistConfig, contactsReducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }),
    contactsApi.middleware,
  ],
});

const persistor = persistStore(store);

setupListeners(store.dispatch);
const storeData = {store, persistor};
export default storeData;

