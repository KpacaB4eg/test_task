import {Dispatch} from "react";
import axios from "axios";
import {apiUrl} from "../../../settings/apiUrl";
import {LOCAL_STORAGE_AUTH_TOKEN_KEY} from "../../../constants/global";
import {ProfileActionTypes} from "../../../types/ProfileTypes";
export const fetchUserInfoData = () => async (dispatch: Dispatch<any>) => {
    try {
        const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY)
        const userInfo = await axios.get(apiUrl.user.userInfo, {
            headers: {
                userToken: token,
            }
        })

        dispatch({
            type: ProfileActionTypes.FETCH_USERINFO_SUCCESS,
            payload: userInfo.data,
        })
    } catch (error) {
        dispatch({
            type: ProfileActionTypes.FETCH_USERINFO_ERROR,
            payload: error,
        })
    }
}

