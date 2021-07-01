import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

const selectSelf = (state: RootState) => state;

export const selectorPrayers = createSelector(
  selectSelf,
  (state: RootState) => {
    return state.prayerState.currentPrayers;
  },
);
