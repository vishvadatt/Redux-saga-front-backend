import {createBrowserHistory} from 'history';
import * as types from '../action/actionTypes';
import {all, call, fork, put, takeEvery} from 'redux-saga/effects'
import {signUpSuccess,signUpError, signInSuccess, signInError, viewUserSuccess, viewUserError, deleteUserSuccess, deleteUserError, fineOneUserSuccess, fineOneUserError, updateUserSuccess, updateUserError} from '../action/action'
// import * as 


import {SignupApi,updateUserApi,SignInApi,getUserApi,deleteUserApi,findOneApi} from '../../API/api';

const history = createBrowserHistory();
function* SignUp({payload}){
    try {
        const response = yield call(SignupApi,payload);
        console.log("response..",response.data);
        if(response.data.code === 200){
            console.log("success...");
            yield put(signUpSuccess(response.data.data))
        }
    } catch (e) {
        console.log("e..",e);
        yield put(signUpError(e.response));
    }
}

function* SignIn({payload}){
    try {
        const response = yield call(SignInApi,payload);
        console.log("response..",response.data);
        if(response.data.code === 200){
            console.log("success");
            yield put(signInSuccess(response.data.data))
            // history.push('/home')
        }
    } catch (e) {
        console.log("e..",e);
        put(signInError(e));
    }
}

function* getUsers(){
    try {
        const response = yield call(getUserApi);
        if(response.data.code === 200){
            yield put(viewUserSuccess(response.data.data.result));
        }
    } catch (e) {
        console.log("e.",e);
        yield put(viewUserError(e));
    }
}

function* deleteUser({payload}){
    try {
        console.log("id.",payload);
        const response = yield call(deleteUserApi,payload);
        if(response.data.code === 200){
            yield put(deleteUserSuccess(response.data.data.message));
        }
    } catch (e) {
        console.log("e.",e);
        yield put(deleteUserError(e));
    }
}

function* fineOneUser({payload}){
    try {
        console.log("id.",payload);
        const response = yield call(findOneApi,payload);
        console.log("res..",response.data.data);
        if(response.data.code === 200){
            yield put(fineOneUserSuccess(response.data.data));
        }
    } catch (e) {
        console.log("e.",e);
        yield put(fineOneUserError(e));
    }
}

function* updateUser({payload}){
    try {
        console.log("data...",payload);
        const response = yield call(updateUserApi,payload);
        console.log("response..",response.data);
        if(response.data.code === 200){
            console.log("success...",response.data.data);
            yield put(updateUserSuccess(response.data.data))
        }
    } catch (e) {
        console.log("e..",e);
        yield put(updateUserError(e.response));
    }
}

function* callSignUp(){
    yield takeEvery(types.SIGNUP,SignUp);
}

function* callSignIn(){
    yield takeEvery(types.SIGNIN,SignIn);
}

function* callGetUsers(){
    yield takeEvery(types.VIEWUSER,getUsers);
}

function* callDeleteUser(){
    yield takeEvery(types.DELETEUSER,deleteUser);
}

function* callFineOneUser(){
    yield takeEvery(types.FINEONE_USER,fineOneUser);
}

function* callUpdateUser(){
    yield takeEvery(types.UPDATE_USER,updateUser);
}

const saga = [
    fork(callSignUp),
    fork(callSignIn),
    fork(callGetUsers),
    fork(callDeleteUser),
    fork(callFineOneUser),
    fork(callUpdateUser),
];

export default function* rootSaga(){
    yield all([...saga]);
}