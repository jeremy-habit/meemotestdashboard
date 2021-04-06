import { combineReducers, configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import userReducer from './reducers/userReducer';
import storage from 'redux-persist/lib/storage'

const middleware = new MiddlewareArray();

const persistConfig = {
    key: 'root',
    whitelist: ['user'],
    storage,
};

const reducers = combineReducers({
    user: userReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const rootReducer = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
    reducer: persistedReducer,
});

export type RootState = ReturnType<typeof rootReducer.getState>;
export type AppDispatch = typeof rootReducer.dispatch;

export default rootReducer;
