import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

const selectSelf = (state: RootState) => state;

export const selectorColumns = createSelector(
  selectSelf,
  (state: RootState) => {
    return state.columnState.columns;
  },
);

export const selectorColumn = createSelector(selectSelf, (state: RootState) => {
  return state.columnState.currentColumn;
});
