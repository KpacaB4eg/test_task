import {Dispatch} from "react";
import axios from "axios";

import {
    AuthActionTypes,
    LoginUserRequestFields,
    LogoutAction,
    RegistrationRequestFields
} from "../../../types/AuthTypes";
import {apiUrl} from "../../../settings/apiUrl";
import {setVisibilityFullScreenModal} from '../FullScreenModalActions'

export const notAuthenticated = (): LogoutAction => ({
    type: AuthActionTypes.LOGOUT,
})
export const fetchLoginData = (loginParams: LoginUserRequestFields) => async (dispatch: Dispatch<any>) => {
    try {
        const authData = await axios.post(apiUrl.auth.login, loginParams)

        dispatch({
            type: AuthActionTypes.LOGIN_SUCCESS,
            payload: authData.data,
        })
    } catch (error) {
        dispatch({
            type: AuthActionTypes.LOGIN_ERROR,
            payload: error,
        })
    }
}

export const registrationUser = (registrationParams: RegistrationRequestFields) => async (dispatch: Dispatch<any>) => {
    try {
        const authData = await axios.post(apiUrl.auth.registration, registrationParams)

        if(authData.data.hasOwnProperty('error')) {
            dispatch({
                type: AuthActionTypes.REGISTRATION_ERROR,
                payload: authData.data,
            })
        } else {
            dispatch({
                type: AuthActionTypes.REGISTRATION_SUCCESS,
                payload: authData.data,
            })
            dispatch(setVisibilityFullScreenModal({visibility: true}))
        }

    } catch (error) {
        dispatch({
            type: AuthActionTypes.REGISTRATION_ERROR,
            payload: error,
        })
    }
}
