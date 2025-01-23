import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import authReducer from './slices/authSlice'
import storage from 'localforage'
import {persistReducer, persistStore} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], 
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: persistedReducer,
  },
})

export const persistor = persistStore(store)
