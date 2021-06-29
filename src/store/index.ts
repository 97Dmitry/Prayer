import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import columnSlice from "./column/columnSlice";
import authSlice from "./user/userSlice";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = getDefaultMiddleware({
  serializableCheck: true,
  immutableCheck: true,
  thunk: false,
});

const store = configureStore({
  reducer: {
    columnState: columnSlice,
    userState: authSlice,
  },
  middleware: [...middleware, sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
