import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from "./actionType";

const initalState = {
    isLoading: false,
    isError: false,
    token: "",
    user: {}
}

export const reducer = (state=initalState, {type, payload}) => {
    switch(type) {
        case CREATE_USER_REQUEST:
            return {...state, isLoading: true};
        case CREATE_USER_FAILURE:
            return {...state, isLoading: false, isError: true};
        case CREATE_USER_SUCCESS:
            return {...state, isLoading: false, isError: false, token: payload.token, user: {...payload.user}};
        case LOGIN_USER_SUCCESS:
            return {...state, isLoading: false, isError: false, token: payload.token, user: {...payload.user}};
        case LOGOUT_USER_SUCCESS:
            return {...initalState};
        default: 
            return {...state};
    }
}