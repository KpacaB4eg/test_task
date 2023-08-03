import {TypedUseSelectorHook, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {useDispatch} from 'react-redux'
import {FormInstance} from "antd/lib/form/hooks/useForm";
import {RootState} from "../store/reducers";
import {AppDispatch} from "../store";
import * as AuthActions from '../store/actions/AuthActions'
import * as FullScreenModalActions from '../store/actions/FullScreenModalActions'
import * as LanguageSwitcherActions from '../store/actions/LanguageSwitcherActions'
import * as ProfileActions from '../store/actions/ProfileActions'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export const useAuthActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AuthActions, dispatch)
}

export const useFullScreenModalActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(FullScreenModalActions, dispatch)
}

export const useLanguageSwitcherActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(LanguageSwitcherActions, dispatch)
}

export const useProfilerActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ProfileActions, dispatch)
}

export const disableFormButtonIfEmptyFields = (form: FormInstance) => {
    const formValues = form.getFieldsValue()
    const fieldAmount: number = Object.keys(formValues).length
    const notEmpty: string[] = Object.keys(formValues).filter((key: string) => formValues[key])
    return notEmpty.length !== fieldAmount
}
