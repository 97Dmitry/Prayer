import { call, put } from "redux-saga/effects";
import { setColumns } from "../column/columnSlice";
import { fetchAllColumns } from "../../api/columnApi";

export function* handleGetColumns() {
  try {
    const response = yield call(fetchAllColumns);
    yield put(setColumns({ ...response.data }));
  } catch (error) {
    console.log(error);
  }
}
