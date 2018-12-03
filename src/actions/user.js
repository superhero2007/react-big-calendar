// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const { userLogin: login, userUpdate, userLogout: logOut } = createActions({
  [ActionTypes.USER_LOGIN]: () => ({}),
  [ActionTypes.USER_UPDATE]: (id: number, view: number) => ({ id, view}),
  [ActionTypes.USER_LOGOUT]: () => ({}),
});
