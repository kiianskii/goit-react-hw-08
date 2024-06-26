
import { contactsReducer } from './contacts/slice'
import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './filter/slice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './auth/slice'


const authPersistConfig = {
	key: 'auth',
	version: 1,
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer,
		auth: persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)

