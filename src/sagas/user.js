/**
 * @module Sagas/User
 * @desc User
 */

import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'modules/client';

import { VIEW, ActionTypes } from 'constants/index';

/**
 * Login
 */
export function* login() {
  try {
    const response = yield call(
      request,
      'http://192.168.1.125/calendar/api/user',
      {
        method: 'POST',
        payload: {
          view: 1,
        },
      }
    );

    yield put({
      type: ActionTypes.USER_LOGIN_SUCCESS,
      payload: { user: response.Id, view: response.View === 1 ? VIEW.MONTH : VIEW.WEEK },
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: err,
    });
  }
}

/**
 * Update
 */
export function* userUpdate({ payload }) {
  try {
    yield call(
      request,
      `http://192.168.1.125/calendar/api/user/${payload.id}`,
      {
        method: 'PUT',
        payload: {
          id: payload.id,
          view: payload.view,
        },
      }
    );

    yield put({
      type: ActionTypes.USER_UPDATE_SUCCESS,
      payload: { view: payload.view === 1 ? VIEW.MONTH : VIEW.WEEK },
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_UPDATE_FAILURE,
      payload: err,
    });
  }
}

/**
 * Logout
 */
export function* logout() {
  try {
    yield call(delay, 200);

    yield put({
      type: ActionTypes.USER_LOGOUT_SUCCESS,
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGOUT_FAILURE,
      payload: err,
    });
  }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN, login),
    takeLatest(ActionTypes.USER_UPDATE, userUpdate),
    takeLatest(ActionTypes.USER_LOGOUT, logout),
  ]);
}
