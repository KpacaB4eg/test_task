import {AuthActions, AuthActionTypes, AuthInitialValuesTypes} from "../../../types/AuthTypes";
import {LOCAL_STORAGE_AUTH_TOKEN_KEY} from "../../../constants/global";
import {requestErrorData} from "../../../types/apiTypes";
import {UserData} from "../../../types/UserTypes";

const initialState: AuthInitialValuesTypes = {
    user_data: {} as UserData,
    error: {} as requestErrorData,
    token: localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY),
}

export const AuthReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS:
            localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, action.payload.user_data.token)
            return {
                ...state,
                ...action.payload,
                token: action.payload.user_data.token,
            }

        case AuthActionTypes.LOGIN_ERROR:
            return {
                ...state,
                ...action.payload,
            }

        case AuthActionTypes.REGISTRATION_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }

        case AuthActionTypes.REGISTRATION_ERROR:
            return {
                ...state,
                ...action.payload,
            }

        case AuthActionTypes.LOGOUT:
            localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_KEY)
            state = initialState
            return {
                ...state,
                token: null,
            }

        default:
            return {
                ...state
            }
    }
}