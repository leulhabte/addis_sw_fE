import { ActionTypes } from "../action";
import { EMP } from "../../constants";

const init: initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isDone: false,
    isLoading_action: false,
    isError_action: false,
    isDone_action: false
}

export const appReducer = (state: initialState = init, action: ActionTypes): initialState => {
    switch (action.type) {
        case EMP.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload as boolean
            }
        case EMP.IS_ERROR:
            return {
                ...state,
                isError: action.payload as boolean
            }
        case EMP.IS_DONE:
            return {
                ...state,
                isDone: action.payload as boolean
            }
        case EMP.IS_LOADING_ACTION:
            return {
                ...state,
                isLoading_action: action.payload as boolean
            }
        case EMP.IS_ERROR_ACTION:
            return {
                ...state,
                isError_action: action.payload as boolean
            }
        case EMP.IS_DONE_ACTION:
            return {
                ...state,
                isDone_action: action.payload as boolean
            }
        case EMP.STORE:
            return {
                ...state,
                data: state.data.concat(action.payload as IEmployee[])
            }
        default:
            return state
    }
}
