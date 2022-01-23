import ACTION_TYPES from './actionTypes';

//get users
export const getUsersAction = () => ({
  type: ACTION_TYPES.GET_USERS_ACTION,
});
export const getUsersRequest = () => ({
  type: ACTION_TYPES.GET_USERS_REQUEST,
});
export const getUsersSuccess = (users) => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  users: users,
});
export const getUsersError = (e) => ({
  type: ACTION_TYPES.GET_USERS_ERROR,
  error: e,
});
// get user by id
export const getUserAction = (id) => ({
  type: ACTION_TYPES.GET_USER_ACTION,
  id: id,
});
export const getUserRequest = () => ({
  type: ACTION_TYPES.GET_USER_REQUEST,
});
export const getUserSuccess = (id) => ({
  type: ACTION_TYPES.GET_USER_SUCCESS,
  id: id,
});
export const getUserError = (e) => ({
  type: ACTION_TYPES.GET_USER_ERROR,
  error: e,
});
// create new user
export const createUserAction = (user) => ({
  type: ACTION_TYPES.CREATE_USER_ACTION,
  user: user,
});
export const createUserRequest = () => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
});
export const createUserSuccess = (user) => ({
  type: ACTION_TYPES.CREATE_USER_SUCCESS,
  user: user,
});
export const createUserError = (e) => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  error: e,
});
