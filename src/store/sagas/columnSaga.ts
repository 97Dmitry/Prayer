import { call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  setColumns,
  getAllColumns,
  setColumn,
  getColumnById,
} from "../column/columnSlice";
import {
  createColumn,
  deleteColumn,
  fetchAllColumns,
  fetchColumnById,
  updateColumn,
  createPrayerForColumn,
} from "../../api/columnApi";
import { getAllPrayers } from "../prayer/prayerSlice";

export function* handleGetColumns() {
  try {
    const response = yield call(fetchAllColumns);
    yield put(setColumns({ ...response.data }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleCreateColumn(
  action: PayloadAction<{ title: string; description: string }>,
) {
  try {
    yield call(createColumn, {
      title: action.payload.title,
      description: action.payload.description,
    });
    // Можно добавить вручную, вместо запроса с бэка
    yield put(getAllColumns());
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetColumnById(action: PayloadAction<{ id: number }>) {
  try {
    const response = yield call(fetchColumnById, action.payload.id);
    yield put(setColumn({ ...response.data }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateColumn(
  action: PayloadAction<{ title: string; description: string; id: number }>,
) {
  try {
    yield call(
      updateColumn,
      { title: action.payload.title, description: action.payload.description },
      action.payload.id,
    );
    yield put(getColumnById({ id: action.payload.id }));
    yield put(getAllColumns());
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteColumn(action: PayloadAction<{ id: number }>) {
  try {
    yield call(deleteColumn, action.payload.id);
    yield put(getAllColumns());
  } catch (error) {
    console.log(error);
  }
}

export function* handleCreateNewPrayer(
  action: PayloadAction<{ title: string; description: string; id: number }>,
) {
  try {
    yield call(
      createPrayerForColumn,
      {
        title: action.payload.title,
        description: action.payload.description,
      },
      action.payload.id,
    );
    yield put(getAllPrayers());
  } catch (error) {
    console.log(error);
  }
}
