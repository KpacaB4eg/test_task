import {
    LanguageSwitcherInitialStateType,
    LanguageSwitcherActions,
    LanguageSwitcherReducerTypes
} from "../../../types/LanguageSwitcherTypes";

const initialState: LanguageSwitcherInitialStateType = {
    languageKey: 'en',
}

export const LanguageSwitcherReducer = (state = initialState, action: LanguageSwitcherActions) => {
    switch (action.type) {
        case LanguageSwitcherReducerTypes.CHANGE_LANGUAGE:
            return {
                ...state,
                languageKey: action.payload.languageKey,
            }

        default:
            return {
                ...state,
            }
    }
}