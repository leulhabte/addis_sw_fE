import { call, put, SagaReturnType, takeLatest } from 'redux-saga/effects'
import { EMP } from '../../constants'
import { fetchEmployee, saveData, removeEmployee, updateEmployee } from "../../api";
import { setData, setLoading, setError, setDone, ActionTypes, setDone_action, setLoading_action } from "../action";

function* handleGetUser(){
    try{
        yield put(setError(false))
        yield put(setLoading(true))
        const data: SagaReturnType<typeof fetchEmployee> = yield call(fetchEmployee)
        yield put(setData(data.data))
        yield put(setLoading(false))
    }catch(ex){
        yield put(setLoading(false))
        yield put(setError(true))
    }
}

function* handleAddUser(action: ActionTypes){
    try{
        yield put(setError(false))
        yield call(saveData, action)
        yield put(setDone(true))
    }catch(ex){
        yield put(setError(true))
    }
}


function* handleRemoveUser(action: ActionTypes){
    try{
        yield put(setLoading_action(true))
        yield call(removeEmployee, action)
        yield put(setDone_action(true))
    }catch(ex){
        yield put(setLoading_action(false))
    }
}

function* handleUpdateUser(action: ActionTypes){
    try{
        const userFullData = action.payload as IEmployee
        yield put(setLoading_action(true))
        yield call(updateEmployee, userFullData)
        yield put(setDone_action(true))
    }catch(ex){
        yield put(setLoading_action(false))
    }
}

export function* mySaga(){
    yield takeLatest(EMP.GET, handleGetUser)
    yield takeLatest(EMP.ADD, handleAddUser)
    yield takeLatest(EMP.DELETE, handleRemoveUser)
    yield takeLatest(EMP.UPDATE, handleUpdateUser)
}