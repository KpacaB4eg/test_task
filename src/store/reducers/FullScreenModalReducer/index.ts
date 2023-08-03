import {FullScreenModal, FullScreenModalAction, FullScreenModalReducerTypes} from "../../../types/FullScreenModal";

const initialState: FullScreenModal = {
    visibility: false,
}

export const FullScreenModalReducer = (state = initialState, action: FullScreenModalAction) => {
    switch (action.type) {

        case FullScreenModalReducerTypes.VISIBILITY_MODAL:
            return {
                ...state,
                ...action.payload,
            }


        default:
            return {
                ...state
            }
    }
}