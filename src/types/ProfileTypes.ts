import {UserData} from './UserTypes'
import {requestErrorData} from "./apiTypes";

export interface ProfileResponseData {
    status: string,
    msg: string,
    user_data: UserData,
}

export interface ProfileRequestFields {
    userToken: string,
}

export enum ProfileActionTypes {
    FETCH_USERINFO = 'FETCH_USERINFO',
    FETCH_USERINFO_SUCCESS = 'FETCH_USERINFO_SUCCESS',
    FETCH_USERINFO_ERROR = 'FETCH_USERINFO_ERROR',
}

export interface ProfileAction {
    type: ProfileActionTypes.FETCH_USERINFO,
}

export interface ProfileActionSuccess {
    type: ProfileActionTypes.FETCH_USERINFO_SUCCESS,
    payload: ProfileResponseData,
}

export interface ProfileActionError {
    type: ProfileActionTypes.FETCH_USERINFO_ERROR,
    payload: requestErrorData,
}

export interface ProfileInitialValuesTypes {
    user_data: UserData,
    error: requestErrorData,
}

export type ProfileActions =
    ProfileAction
    | ProfileActionSuccess
    | ProfileActionError
