import {ReactNode} from "react";

export interface FullScreenModal {
    visibility: boolean,
}

export enum FullScreenModalReducerTypes {
    VISIBILITY_MODAL = 'VISIBILITY_MODAL',
}

export type FullScreenModalAction = {
    type: FullScreenModalReducerTypes.VISIBILITY_MODAL,
    payload: FullScreenModal,
}

export type FullScreenModalComponent = {
    children?: ReactNode | null
}