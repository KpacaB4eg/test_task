import React from "react";
import {useTranslation} from "react-i18next";
import './style.less'

const RegistrationSider: React.FC = () => {
    const {t} = useTranslation()

    return (
        <div className="registration-left-sider">
            <div className="container">
                <div className="main-text">
                    <span>{t('profile.sider.main_text')}</span>
                </div>
                <div className="secondary-text">
                    <span>{t('profile.sider.secondary_text')}</span>
                </div>
            </div>
            <div className="footter">
                <div className='image-container'/>
            </div>
        </div>
    )
}

export default RegistrationSider
