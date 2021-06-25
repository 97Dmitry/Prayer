import { createSlice } from "@reduxjs/toolkit";
import { iUser } from "./iUser";

const initialState: iUser = {
  username: "",
  isAuth: true,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
export const {} = userSlice.actions;
