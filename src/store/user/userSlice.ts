import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth, IRegistration, IUser } from "./iUser";

const initialState: IUser = {
  name: "",
  email: "",
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    authorization: (state, action: PayloadAction<IAuth>) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    registration: (state, action: PayloadAction<IRegistration>) => {},
    setUser: (state, action: PayloadAction<IUser>) => {
      return { ...state, ...action.payload };
    },
  },
});

export default userSlice.reducer;
export const { authorization, setUser, registration } = userSlice.actions;
