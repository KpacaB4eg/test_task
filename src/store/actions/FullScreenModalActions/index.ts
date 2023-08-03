import {FullScreenModal, FullScreenModalAction, FullScreenModalReducerTypes} from "../../../types/FullScreenModal";

export const setVisibilityFullScreenModal = (visible: FullScreenModal): FullScreenModalAction => ({
    type: FullScreenModalReducerTypes.VISIBILITY_MODAL,
    payload: visible,
})