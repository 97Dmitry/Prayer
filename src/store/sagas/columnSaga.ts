import { call, put } from "redux-saga/effects";
import { setColumns, getAllColumns, setColumn } from "../column/columnSlice";
import {
  createColumn,
  deleteColumn,
  fetchAllColumns,
  fetchColumnById,
  updateColumn,
} from "../../api/columnApi";

export function* handleGetColumns() {
  try {
    const response = yield call(fetchAllColumns);
    yield put(setColumns({ ...response.data }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleCreateColumn(action) {
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

export function* handleGetColumnById(action) {
  try {
    const response = yield call(fetchColumnById, action.payload.id);
    yield put(setColumn({ ...response.data }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleUpdateColumn(action) {
  try {
    yield call(
      updateColumn,
      { title: action.payload.title, description: action.payload.description },
      action.payload.id,
    );
    yield put(getAllColumns());
  } catch (error) {
    console.log(error);
  }
}

export function* handleDeleteColumn(action) {
  try {
    yield call(deleteColumn, action.payload.id);
    yield put(getAllColumns());
  } catch (error) {
    console.log(error);
  }
}
