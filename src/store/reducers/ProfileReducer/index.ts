import {UserData} from "../../../types/UserTypes";
import {requestErrorData} from "../../../types/apiTypes";
import {ProfileActions, ProfileActionTypes, ProfileInitialValuesTypes} from "../../../types/ProfileTypes";

const initialState: ProfileInitialValuesTypes = {
    user_data: {} as UserData,
    error: {} as requestErrorData,
}

export const ProfileReducer = (state = initialState, action: ProfileActions) => {
    switch (action.type) {
        case ProfileActionTypes.FETCH_USERINFO_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }

        case ProfileActionTypes.FETCH_USERINFO_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return {
                ...state
            }
    }
}