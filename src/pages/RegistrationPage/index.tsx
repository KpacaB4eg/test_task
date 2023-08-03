import React, {useEffect} from "react";
import RegistrationSider from "../../components/RegistrationSider";
import ProfileCreateForm from "../../components/ProfileCreateForm";
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {AuthInitialValuesTypes} from "../../types/AuthTypes";
import LogoutButton from "../../components/LogoutButton";
import './style.less'


const RegistrationPage: React.FC = () => {
    const navigate = useNavigate();
    const {token} = useTypedSelector<AuthInitialValuesTypes>(state => state.AuthReducer)

    useEffect(() => {

        if (!token) {
            navigate('/login')
        }
    }, [token, navigate])

    return (
        <div className='registration-page-wrapper'>
            <div className='sider'>
                <RegistrationSider/>
            </div>
            <div className='content'>
                <div className="profile-form">
                    <ProfileCreateForm/>
                </div>
                <div className="footter">
                    <div className="container">
                        <LogoutButton />
                        <div className="next-button">
                            Button
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage
