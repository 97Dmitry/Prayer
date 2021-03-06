import { createCommentForPrayer } from "../../api/prayerApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { deletePrayer, fetchAllPrayers } from "../../api/prayerApi";
import { getAllPrayers, setPrayers } from "../prayer/prayerSlice";

export function* handleGetPrayers() {
  try {
    const response = yield call(fetchAllPrayers);
    yield put(setPrayers({ ...response.data }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeletePrayer(action: PayloadAction<{ id: number }>) {
  try {
    yield call(deletePrayer, action.payload.id);
    yield put(getAllPrayers());
  } catch (error) {
    console.log(error);
  }
}

export function* handleCreateCommentForPrayer(
  action: PayloadAction<{ data: string; id: number }>,
) {
  try {
    yield call(createCommentForPrayer, action.payload.data, action.payload.id);
  } catch (error) {
    console.log(error);
  }
}
