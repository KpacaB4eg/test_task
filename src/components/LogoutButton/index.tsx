import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useAuthActions} from "../../hooks/useTypedSelector";
import LogoutModalConfirm from "../LogoutModalConfirm";
import TablerLogin from "../../assets/images/tabler_login.svg";
import './style.less'

const LogoutButton:React.FC = () => {
    const {t} = useTranslation()
    const {notAuthenticated} = useAuthActions()
    const [visibility, setVisibility] = useState<boolean>(false)

    const goOut = () => {
        notAuthenticated()
    }

    return (
        <>
        <LogoutModalConfirm
            visibility={visibility}
            onCancel={() => setVisibility(!visibility)}
            handleGoOut={goOut}
        />
            <div className="logout-button" onClick={() => setVisibility(!visibility)}>
                <div className='icon'>
                    <img src={TablerLogin} alt=""/>
                </div>
                <div className="text">
                    <span>{t('logout.button_text')}</span>
                </div>
            </div>
        </>

    )
}

export default LogoutButton
