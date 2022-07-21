import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {authSlice} from './auth/auth-slice'; 
import contactsReducer  from './contacts/contacts-reducers';


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


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    contacts: contactsReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }),
  ],
  
});

const persistor = persistStore(store);


const storeData = {store, persistor};
export default storeData;

