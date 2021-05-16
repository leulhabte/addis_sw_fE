import { EMP } from "../../constants";

export type ActionTypes = 
   | {type: typeof EMP.IS_LOADING; payload: boolean}
   | {type: typeof EMP.IS_ERROR; payload: boolean}
   | {type: typeof EMP.IS_DONE; payload: boolean}
   | {type: typeof EMP.STORE; payload: IEmployee[]}
   | {type: typeof EMP.DELETE; payload: string}
   | {type: typeof EMP.UPDATE; payload: IEmployee}

export const setLoading = (loading: boolean): ActionTypes =>({
    type: EMP.IS_LOADING,
    payload : loading
})

export const setError = (error: boolean): ActionTypes =>({
    type: EMP.IS_ERROR,
    payload: error
})

export const setDone = (done: boolean): ActionTypes =>({
    type: EMP.IS_DONE,
    payload: done
})

export const setLoading_action = (loading: boolean): ActionTypes =>({
    type: EMP.IS_LOADING_ACTION,
    payload : loading
})

export const setError_action = (error: boolean): ActionTypes =>({
    type: EMP.IS_ERROR_ACTION,
    payload: error
})

export const setDone_action = (done: boolean): ActionTypes =>({
    type: EMP.IS_DONE_ACTION,
    payload: done
})

export const setData = (data: IEmployee[]): ActionTypes =>({
    type: EMP.STORE,
    payload: data
})