import { RootState } from "../index";
import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: RootState) => state;

export const selectorUser = createSelector(selectSelf, (state: RootState) => {
  return state.userState;
});
