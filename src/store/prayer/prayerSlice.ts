import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, IPrayer } from "./iPrayer";

const initialState: IState = {
  currentPrayers: {},
};

export const prayerSlice = createSlice({
  name: "prayer",
  initialState,
  reducers: {
    getAllPrayers: () => {},
    setPrayers: (state, action: PayloadAction<Record<number, IPrayer>>) => {
      state.currentPrayers = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deletePrayer: (state, action: PayloadAction<{ id: number }>) => {},
  },
});

export default prayerSlice.reducer;
export const { deletePrayer, setPrayers, getAllPrayers } = prayerSlice.actions;
