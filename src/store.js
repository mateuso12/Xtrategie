import { createSlice, configureStore } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.email = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
