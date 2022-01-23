import ACTION_TYPES from '../actions/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import { getUsersSaga, createUserSaga, getUserSaga } from './usersSaga';

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, getUsersSaga);
  yield takeLatest(ACTION_TYPES.GET_USER_ACTION, getUserSaga);
  yield takeLatest(ACTION_TYPES.CREATE_USER_ACTION, createUserSaga);
}

export default rootSaga;
