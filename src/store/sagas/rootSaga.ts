import { takeEvery } from "redux-saga/effects";
import {
  handleCreateColumn,
  handleDeleteColumn,
  handleGetColumnById,
  handleGetColumns,
  handleUpdateColumn,
} from "./columnSaga";
import {
  createNewColumn,
  getAllColumns,
  getColumnById,
  updateColumn,
  deleteColumn,
} from "../column/columnSlice";
import { authorization, registration } from "../user/userSlice";
import { handleSingIn, handleSingUp } from "./userSaga";

export function* watcherSaga() {
  yield takeEvery(getAllColumns.type, handleGetColumns);
  yield takeEvery(authorization.type, handleSingIn);
  yield takeEvery(registration.type, handleSingUp);
  yield takeEvery(createNewColumn.type, handleCreateColumn);
  yield takeEvery(getColumnById.type, handleGetColumnById);
  yield takeEvery(updateColumn.type, handleUpdateColumn);
  yield takeEvery(deleteColumn.type, handleDeleteColumn);
}
