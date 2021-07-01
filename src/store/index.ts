import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import createSagaMiddleware from "@redux-saga/core";

import columnSlice from "./column/columnSlice";
import authSlice from "./user/userSlice";
import prayerSlice from "./prayer/prayerSlice";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  columnState: columnSlice,
  userState: authSlice,
  prayerState: prayerSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  whitelist: ["userState"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
  immutableCheck: true,
  thunk: false,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...middleware, sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
