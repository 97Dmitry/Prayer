import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./iUser";

const initialState: IUser = {
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
