import { call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { singIn, singUp } from "../../api/userApi";
import { setUser } from "../user/userSlice";

export function* handleSingIn(
  action: PayloadAction<{
    email: string;
    password: string;
  }>,
) {
  try {
    const response = yield call(singIn, { ...action.payload });
    yield put(setUser({ ...response.data }));
  } catch (e) {
    console.log(e);
  }
}

export function* handleSingUp(
  action: PayloadAction<{ email: string; name: string; password: string }>,
) {
  try {
    const response = yield call(singUp, { ...action.payload });
    yield put(
      setUser({
        name: response.data.name,
        email: response.data.email,
        id: response.data.id,
        token: response.data.token,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}
