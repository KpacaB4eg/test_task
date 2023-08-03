import {LanguageSwitcherAction, LanguageSwitcherReducerTypes, LanguageSwitcherInitialStateType} from "../../../types/LanguageSwitcherTypes";

export const setLanguageKey = (languageKey: LanguageSwitcherInitialStateType): LanguageSwitcherAction => ({
    type: LanguageSwitcherReducerTypes.CHANGE_LANGUAGE,
    payload: languageKey,
})