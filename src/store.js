import { createSlice, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from './saga'

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: ""
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(saga);

export default store;
