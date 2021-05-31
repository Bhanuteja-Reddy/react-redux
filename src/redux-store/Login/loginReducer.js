import { LOGIN_ACTION } from './loginActionTypes';
const initialState = {
    loading: false,
    payload: {},
    error: ''
}

const loadData = (state, Action) => {
    return {
        ...state,
        userName: Action.payLoad.userName,
        employeeId: Action.payLoad.employeeId
    }
}


export const LoginReducer = (state = initialState, Action) => {
    const { Type } = Action;
    switch (Type) {
        case LOGIN_ACTION:
            return loadData(state, Action);
        default: return state;
    }
}