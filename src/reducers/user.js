import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { STATUS, VIEW, ActionTypes } from 'constants/index';

export const userState = {
  isAuthenticated: false,
  user: null,
  status: STATUS.IDLE,
  view: VIEW.MONTH,
};

export default {
  user: handleActions(
    {
      [ActionTypes.USER_LOGIN]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
        }),
      [ActionTypes.USER_LOGIN_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          isAuthenticated: { $set: true },
          status: { $set: STATUS.READY },
          view: { $set: payload.view },
          user: { $set: payload.user },
        }),
      [ActionTypes.USER_UPDATE]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
        }),
      [ActionTypes.USER_UPDATE_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          isAuthenticated: { $set: true },
          status: { $set: STATUS.READY },
          view: { $set: payload.view },
        }),
      [ActionTypes.USER_LOGOUT]: state =>
        immutable(state, {
          status: { $set: STATUS.RUNNING },
        }),
      [ActionTypes.USER_LOGOUT_SUCCESS]: state =>
        immutable(state, {
          isAuthenticated: { $set: false },
          status: { $set: STATUS.IDLE },
        }),
    },
    userState,
  ),
};
