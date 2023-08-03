import {combineReducers} from "redux";
import {AuthReducer} from "./AuthReducer";
import {FullScreenModalReducer} from "./FullScreenModalReducer";
import {LanguageSwitcherReducer} from "./LanguageSwitcherReducer";
import {ProfileReducer} from "./ProfileReducer";

export const rootReducer = combineReducers({
    AuthReducer,
    FullScreenModalReducer,
    LanguageSwitcherReducer,
    ProfileReducer,
})

export type RootState = ReturnType<typeof rootReducer>
