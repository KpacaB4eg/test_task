import {UserData} from './UserTypes'
import {requestErrorData} from "./apiTypes";

export interface LoginUserResponseData {
    status: string,
    msg: string,
    user_data: UserData,
}

export interface RegistrationResponseData {
    status: string,
    msg: string,
    user_data: Pick<UserData, 'token'>,
}

export interface LoginUserRequestFields {
    email: string,
    password: string,
}

export interface RegistrationRequestFields {
    email: string,
    password: string,
    ref: string,
}

export enum AuthActionTypes {
    LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_ERROR = 'LOGIN_ERROR',
    REGISTRATION = 'REGISTRATION',
    REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS',
    REGISTRATION_ERROR = 'REGISTRATION_ERROR',
    LOGOUT = 'LOGOUT'
}

export interface LoginAction {
    type: AuthActionTypes.LOGIN,
}

export interface LoginActionSuccess {
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: LoginUserResponseData,
}

export interface LoginActionError {
    type: AuthActionTypes.LOGIN_ERROR,
    payload: requestErrorData,
}


export interface RegistrationAction {
    type: AuthActionTypes.REGISTRATION,
}

export interface RegistrationActionSuccess {
    type: AuthActionTypes.REGISTRATION_SUCCESS,
    payload: RegistrationResponseData,
}

export interface RegistrationActionError {
    type: AuthActionTypes.REGISTRATION_ERROR,
    payload: requestErrorData,
}

export interface LogoutAction {
    type: AuthActionTypes.LOGOUT,
}

export interface AuthInitialValuesTypes {
    user_data: UserData,
    error: requestErrorData,
    token: string | null,
}

export type AuthActions =
    LoginAction
    | LoginActionSuccess
    | LoginActionError
    | RegistrationAction
    | RegistrationActionSuccess
    | RegistrationActionError
    | LogoutAction