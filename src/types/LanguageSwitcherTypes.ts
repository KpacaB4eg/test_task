export type LanguageKeys = 'en' | 'ru' | 'ua'
export interface LanguageSwitcherInitialStateType {
    languageKey: LanguageKeys
}

export interface LanguageSettings {
    key: LanguageKeys,
    value: string,
    shortValue: string,
}

export enum LanguageSwitcherReducerTypes {
    CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
}

export type LanguageSwitcherAction = {
    type: LanguageSwitcherReducerTypes.CHANGE_LANGUAGE,
    payload: LanguageSwitcherInitialStateType,
}

export type LanguageSwitcherActions = LanguageSwitcherAction
