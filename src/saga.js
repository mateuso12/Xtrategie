import { takeEvery, put } from 'redux-saga/effects'
import { login } from './store';

export function* sagaLogin(data) {
  console.log(data.payload)
  yield put(login({
    email: data.payload.email,
    password: data.payload.password
  }))
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.SAGA_LOGIN, sagaLogin);
}

export const sagaActions = {
  SAGA_LOGIN: "SAGA_LOGIN"
};