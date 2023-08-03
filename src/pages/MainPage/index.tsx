import React, {useEffect} from "react";
import {isEmpty} from 'lodash'
import { useNavigate } from "react-router-dom";
import {useTypedSelector, useProfilerActions} from "../../hooks/useTypedSelector";
import {AuthInitialValuesTypes} from "../../types/AuthTypes";
import {ProfileInitialValuesTypes} from "../../types/ProfileTypes";


const MainPage: React.FC = () => {
    const navigate = useNavigate();
    const {token} = useTypedSelector<AuthInitialValuesTypes>(state => state.AuthReducer)
    const {user_data} = useTypedSelector<ProfileInitialValuesTypes>(state => state.ProfileReducer)
    const {fetchUserInfoData} = useProfilerActions()

    useEffect(() => {
        if(token && isEmpty(user_data)) {
            fetchUserInfoData()
        }
    }, [])

    useEffect(() => {
        if(!token) {
            navigate('/login')
        }

        if(token && !user_data.is_profile_created) {
            navigate('/profile/create')
        }
    }, [token, user_data, navigate])

    return null
}

export default MainPage
