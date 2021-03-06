import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IColumn, INewColumn, IState, IUpdateColumn, IPrayer } from "./iColumn";

const initialState: IState = {
  columns: {},
  currentColumn: {
    description: "",
    id: 0,
    title: "",
    userId: 0,
  },
};

export const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    getAllColumns: () => {},
    setColumns: (state, action: PayloadAction<Record<number, IColumn>>) => {
      state.columns = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getColumnById: (state, action: PayloadAction<{ id: number }>) => {},
    setColumn: (state, action: PayloadAction<IColumn>) => {
      state.currentColumn = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createNewColumn: (state, action: PayloadAction<INewColumn>) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateColumn: (state, action: PayloadAction<IUpdateColumn>) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteColumn: (state, action: PayloadAction<{ id: number }>) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createNewPreyer: (state, action: PayloadAction<IPrayer>) => {},
  },
});

export default columnSlice.reducer;
export const {
  getAllColumns,
  setColumns,
  createNewColumn,
  getColumnById,
  setColumn,
  updateColumn,
  deleteColumn,
  createNewPreyer,
} = columnSlice.actions;
