import { takeEvery } from "redux-saga/effects";

import {
  handleCreateColumn,
  handleDeleteColumn,
  handleGetColumnById,
  handleGetColumns,
  handleUpdateColumn,
  handleCreateNewPrayer,
} from "./columnSaga";
import {
  createNewColumn,
  getAllColumns,
  getColumnById,
  updateColumn,
  deleteColumn,
  createNewPreyer,
} from "../column/columnSlice";

import { authorization, registration } from "../user/userSlice";
import { handleSingIn, handleSingUp } from "./userSaga";

import {
  createCommentForPrayer,
  deletePrayer,
  getAllPrayers,
} from "../prayer/prayerSlice";
import {
  handleCreateCommentForPrayer,
  handleDeletePrayer,
  handleGetPrayers,
} from "./prayerSaga";

export function* watcherSaga() {
  yield takeEvery(registration.type, handleSingUp);
  yield takeEvery(authorization.type, handleSingIn);

  yield takeEvery(getAllColumns.type, handleGetColumns);
  yield takeEvery(createNewColumn.type, handleCreateColumn);
  yield takeEvery(getColumnById.type, handleGetColumnById);
  yield takeEvery(updateColumn.type, handleUpdateColumn);
  yield takeEvery(deleteColumn.type, handleDeleteColumn);
  yield takeEvery(createNewPreyer.type, handleCreateNewPrayer);

  yield takeEvery(deletePrayer.type, handleDeletePrayer);
  yield takeEvery(getAllPrayers.type, handleGetPrayers);
  yield takeEvery(createCommentForPrayer.type, handleCreateCommentForPrayer);
}
