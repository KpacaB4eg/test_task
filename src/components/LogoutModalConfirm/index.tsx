import React from "react";
import {Button, Modal} from "antd";
import {CloseCircleFilled} from '@ant-design/icons'
import './style.less'
import {useTranslation} from "react-i18next";

type LogoutModalTypes = {
    visibility: boolean,
    onCancel: () => void,
    handleGoOut: () => void,
}

const LogoutModalConfirm: React.FC<LogoutModalTypes> = ({visibility, onCancel, handleGoOut}) => {
    const {t} = useTranslation()

    return (
        <Modal
            className="logout-modal-confirm"
            footer={null}
            open={visibility}
            onCancel={onCancel}
            centered
            width={500}
        >
            <div className="logout-modal-confirm-container">
                <div className="icon">
                    <CloseCircleFilled style={{color: '#FF776F', fontSize: '72px'}}/>
                </div>
                <div className="main-text">
                    <span>{t('logout.main_text')}</span>
                </div>
                <div className="secondary-text">
                    <span>{t('logout.secondary_text')}</span>
                </div>
                <div className="first-button">
                    <Button type="primary" style={{width: '100%'}}
                            onClick={onCancel}>{t('logout.button_confirm')}</Button>
                </div>
                <div className="second-button">
                    <Button style={{width: '100%'}} onClick={handleGoOut}>{t('logout.button_cancel')}</Button>
                </div>
            </div>
        </Modal>
    )
}

export default LogoutModalConfirm
