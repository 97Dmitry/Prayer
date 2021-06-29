import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IColumn } from "./iColumn";

const initialState: Record<number, IColumn> = {};

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    getAllColumns() {},
    setColumns(state, action: PayloadAction<Record<number, IColumn>>) {
      const columns = action.payload;
      return { ...state, ...columns };
    },
  },
});

export default columnSlice.reducer;
export const { getAllColumns, setColumns } = columnSlice.actions;
