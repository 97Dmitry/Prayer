import { takeEvery } from "redux-saga/effects";
import { handleGetColumns } from "./columnSaga";
import { getAllColumns } from "../column/columnSlice";
import { authorization, registration } from "../user/userSlice";
import { handleSingIn, handleSingUp } from "./userSaga";

export function* watcherSaga() {
  yield takeEvery(getAllColumns.type, handleGetColumns);
  yield takeEvery(authorization.type, handleSingIn);
  yield takeEvery(registration.type, handleSingUp);
}
