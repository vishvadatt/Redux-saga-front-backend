import * as types from './actionTypes';

// =================SignUP=========================
export const signUp = (data) =>({
    type : types.SIGNUP,
    payload : data
});

export const signUpSuccess = (data) =>({
    type : types.SIGNUP_SUCCESS,
    payload : data
});

export const signUpError = (error) =>({
    type : types.SIGNUP_ERROR,
    payload : error
});

// =================SignIn=========================

export const signIn = (data) =>({
    type : types.SIGNIN,
    payload : data
});

export const signInSuccess = (data) =>({
    type : types.SIGNIN_SUCCESS,
    payload : data
});

export const signInError = (error) =>({
    type : types.SIGNIN_ERROR,
    payload : error
});

// =================ViewUser=========================

export const viewUser = (data) =>({
    type : types.VIEWUSER,
    payload : data
});

export const viewUserSuccess = (data) =>({
    type : types.VIEWUSER_SUCCESS,
    payload : data
});

export const viewUserError = (error) =>({
    type : types.VIEWUSER_ERROR,
    payload : error
});

// =================DeleteUser=========================

export const deleteUser = (data) =>({
    type : types.DELETEUSER,
    payload : data
});

export const deleteUserSuccess = (data) =>({
    type : types.DELETEUSER_SUCCESS,
    payload : data
});

export const deleteUserError = (error) =>({
    type : types.DELETEUSER_ERROR,
    payload : error
});

// =================FINEONE=========================

export const fineOneUser = (data) =>({
    type : types.FINEONE_USER,
    payload : data
});

export const fineOneUserSuccess = (data) =>({
    type : types.FINEONE_USER_SUCCESS,
    payload : data
});

export const fineOneUserError = (error) =>({
    type : types.FINEONE_USER_ERROR,
    payload : error
});

// =================uodate user=========================

export const updateUser = (data) =>({
    type : types.UPDATE_USER,
    payload : data
});

export const updateUserSuccess = (data) =>({
    type : types.UPDATE_USER_SUCCESS,
    payload : data
});

export const updateUserError = (error) =>({
    type : types.UPDATE_USER_ERROR,
    payload : error
});