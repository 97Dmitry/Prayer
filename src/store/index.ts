import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import columnSlice from "./column/columnSlice";

const middleware = getDefaultMiddleware({
  serializableCheck: true,
  immutableCheck: true,
  thunk: true,
});

const store = configureStore({
  reducer: {
    columnState: columnSlice,
  },
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
