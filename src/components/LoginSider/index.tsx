import React from "react";
import {useTranslation} from "react-i18next";
import ListItem from "./components/ListItem";
import './style.less'

const LoginSider: React.FC = () => {
    const {t} = useTranslation()

    return (
        <div className="left-sider">
            <div className="container">
                <div className="main-text">{t('sign_in_text')}</div>
                <div className="secondary-text">{t('sign_in_context_text')}</div>
                <ListItem />
            </div>
            <div className="footter">
                <div className='image-container'/>
            </div>
        </div>
    )
}

export default LoginSider
